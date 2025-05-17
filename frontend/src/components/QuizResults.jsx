import { Link } from 'react-router-dom';

const QuizResults = ({ results }) => {
  const { score, totalQuestions, percentage } = results;
  
  return (
    <div className="card text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Results</h2>
      
      <div className="mb-6">
        <p className="text-4xl font-bold mb-2">
          {score}/{totalQuestions}
        </p>
        <p className={`text-xl ${percentage >= 70 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {percentage.toFixed(0)}%
        </p>
      </div>
      
      <div className="flex justify-center space-x-4">
        <Link to="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default QuizResults;
