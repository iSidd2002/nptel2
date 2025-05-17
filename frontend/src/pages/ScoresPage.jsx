import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { getAssignmentScores } from "../utils/localStorage";
import { getAssignments } from "../utils/api";

const ScoresPage = () => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scores = getAssignmentScores();

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const data = await getAssignments();
        setAssignments(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load assignments. Please try again later.");
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <LoadingSpinner size="large" message="Loading scores..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-xl text-red-600 dark:text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  const hasScores = Object.keys(scores).length > 0;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">My Scores</h1>

      {!hasScores ? (
        <div className="text-center">
          <p className="text-xl mb-4">You haven't completed any quizzes yet.</p>
          <Link to="/" className="btn btn-primary inline-block">
            Go to Assignments
          </Link>
        </div>
      ) : (
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="py-3 px-4 text-left">Assignment</th>
                  <th className="py-3 px-4 text-center">Score</th>
                  <th className="py-3 px-4 text-center">Percentage</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {assignments
                  .map((assignment) => {
                    const score = scores[assignment.id];
                    if (!score) return null;

                    return (
                      <tr
                        key={assignment.id}
                        className="border-b dark:border-gray-700"
                      >
                        <td className="py-3 px-4">{assignment.title}</td>
                        <td className="py-3 px-4 text-center">
                          {score.score}/{score.totalQuestions}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span
                            className={
                              score.percentage >= 70
                                ? "text-green-600 dark:text-green-400"
                                : "text-red-600 dark:text-red-400"
                            }
                          >
                            {score.percentage.toFixed(0)}%
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Link
                            to={`/assignments/${assignment.id}`}
                            className="text-blue-600 hover:underline dark:text-blue-400"
                          >
                            Retake Quiz
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                  .filter(Boolean)}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoresPage;
