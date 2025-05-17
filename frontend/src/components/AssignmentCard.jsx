import { Link } from 'react-router-dom';
import { getAssignmentScores } from '../utils/localStorage';

const AssignmentCard = ({ assignment }) => {
  const scores = getAssignmentScores();
  const score = scores[assignment.id];

  return (
    <div className="card hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{assignment.title}</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{assignment.description}</p>
      
      {score && (
        <div className="mb-4">
          <p className="text-sm font-medium">
            Previous score: 
            <span className={`ml-2 ${score.percentage >= 70 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {score.score}/{score.totalQuestions} ({score.percentage.toFixed(0)}%)
            </span>
          </p>
        </div>
      )}
      
      <Link 
        to={`/assignments/${assignment.id}`} 
        className="btn btn-primary block text-center"
      >
        {score ? 'Retake Quiz' : 'Start Quiz'}
      </Link>
    </div>
  );
};

export default AssignmentCard;
