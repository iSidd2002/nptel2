const LoadingSpinner = ({ size = 'medium', message = 'Loading...' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${sizeClasses[size]} border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin dark:border-gray-700 dark:border-t-blue-400`}></div>
      {message && <p className="mt-2 text-gray-600 dark:text-gray-400">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
