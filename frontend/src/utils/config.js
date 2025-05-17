// Configuration for different environments
const config = {
  // API URL - use environment variable if available, otherwise use relative path
  apiUrl: import.meta.env.VITE_API_URL || '/api'
};

export default config;
