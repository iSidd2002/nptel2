// Get user progress from localStorage
export const getUserProgress = () => {
  const progress = localStorage.getItem('quizProgress');
  return progress ? JSON.parse(progress) : {};
};

// Save user progress to localStorage
export const saveUserProgress = (assignmentId, data) => {
  const progress = getUserProgress();
  progress[assignmentId] = data;
  localStorage.setItem('quizProgress', JSON.stringify(progress));
};

// Get assignment scores from localStorage
export const getAssignmentScores = () => {
  const scores = localStorage.getItem('quizScores');
  return scores ? JSON.parse(scores) : {};
};

// Save assignment score to localStorage
export const saveAssignmentScore = (assignmentId, score) => {
  const scores = getAssignmentScores();
  scores[assignmentId] = score;
  localStorage.setItem('quizScores', JSON.stringify(scores));
};
