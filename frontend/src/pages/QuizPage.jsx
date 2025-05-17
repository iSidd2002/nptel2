import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuizQuestion from "../components/QuizQuestion";
import QuizResults from "../components/QuizResults";
import LoadingSpinner from "../components/LoadingSpinner";
import ProgressBar from "../components/ProgressBar";
import Timer from "../components/Timer";
import ConfirmDialog from "../components/ConfirmDialog";
import { getAssignment, submitAssignment } from "../utils/api";
import { saveUserProgress, saveAssignmentScore } from "../utils/localStorage";

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [results, setResults] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const data = await getAssignment(id);
        setAssignment(data);
        setAnswers(new Array(data.questions.length).fill(null));
        setLoading(false);
      } catch (err) {
        setError("Failed to load quiz. Please try again later.");
        setLoading(false);
      }
    };

    fetchAssignment();
  }, [id]);

  const handleSelectAnswer = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    // Save progress to localStorage
    saveUserProgress(id, { answers: newAnswers, currentQuestion });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < assignment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      saveUserProgress(id, { answers, currentQuestion: currentQuestion + 1 });
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      saveUserProgress(id, { answers, currentQuestion: currentQuestion - 1 });
    }
  };

  const handleConfirmSubmit = () => {
    setShowConfirmDialog(true);
  };

  const handleSubmit = async () => {
    setShowConfirmDialog(false);
    setSubmitting(true);
    try {
      const data = await submitAssignment(id, answers);
      setResults(data);
      saveAssignmentScore(id, data);
    } catch (err) {
      setError("Failed to submit quiz. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleTimeUp = () => {
    if (!results) {
      handleSubmit();
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <LoadingSpinner size="large" message="Loading quiz..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-xl text-red-600 dark:text-red-400">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="btn btn-primary mt-4"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (results) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <QuizResults results={results} />

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Question Review</h3>
          {assignment.questions.map((question, index) => (
            <QuizQuestion
              key={question.id}
              question={question}
              selectedAnswer={answers[index]}
              onSelectAnswer={() => {}}
              showResults={true}
              result={results.results[index]}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <ConfirmDialog
        isOpen={showConfirmDialog}
        message="Are you sure you want to submit your quiz? You won't be able to change your answers after submission."
        onConfirm={handleSubmit}
        onCancel={() => setShowConfirmDialog(false)}
      />

      <div className="mb-6">
        <h1 className="text-2xl font-bold">{assignment.title}</h1>
        <p className="text-gray-600 dark:text-gray-400">
          {assignment.description}
        </p>
      </div>

      <div className="mb-2 flex justify-between items-center">
        <p className="font-medium">
          Question {currentQuestion + 1} of {assignment.questions.length}
        </p>
        <Timer minutes={assignment.timeLimit} onTimeUp={handleTimeUp} />
      </div>

      <ProgressBar
        current={currentQuestion + 1}
        total={assignment.questions.length}
      />

      <QuizQuestion
        question={assignment.questions[currentQuestion]}
        selectedAnswer={answers[currentQuestion]}
        onSelectAnswer={handleSelectAnswer}
        showResults={false}
      />

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevQuestion}
          disabled={currentQuestion === 0}
          className={`btn ${
            currentQuestion === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-800"
              : "btn-secondary"
          }`}
        >
          Previous
        </button>

        {currentQuestion < assignment.questions.length - 1 ? (
          <button
            onClick={handleNextQuestion}
            disabled={answers[currentQuestion] === null}
            className={`btn ${
              answers[currentQuestion] === null
                ? "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-800"
                : "btn-primary"
            }`}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleConfirmSubmit}
            disabled={answers.includes(null) || submitting}
            className={`btn ${
              answers.includes(null) || submitting
                ? "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-800"
                : "btn-primary"
            }`}
          >
            {submitting ? "Submitting..." : "Submit Quiz"}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
