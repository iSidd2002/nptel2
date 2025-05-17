const QuizQuestion = ({ question, selectedAnswer, onSelectAnswer, showResults, result }) => {
  return (
    <div className="card mb-6">
      <h3 className="text-lg font-medium mb-4">{question.text}</h3>
      <div className="space-y-2">
        {question.options.map((option, index) => {
          let optionClass = "block w-full text-left p-3 rounded-md border ";
          
          if (showResults) {
            if (result.correctAnswer === index) {
              optionClass += "bg-green-100 border-green-500 dark:bg-green-900 dark:border-green-600";
            } else if (result.userAnswer === index && result.userAnswer !== result.correctAnswer) {
              optionClass += "bg-red-100 border-red-500 dark:bg-red-900 dark:border-red-600";
            } else {
              optionClass += "border-gray-300 dark:border-gray-700";
            }
          } else {
            optionClass += selectedAnswer === index 
              ? "bg-blue-100 border-blue-500 dark:bg-blue-900 dark:border-blue-600" 
              : "border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700";
          }
          
          return (
            <button
              key={index}
              className={optionClass}
              onClick={() => onSelectAnswer(index)}
              disabled={showResults}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;
