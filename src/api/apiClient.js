import axios from 'axios';

/**
 * Central Axios instance for the UAE Travel Card System backend.
 * Base URL: http://localhost:8080
 *
 * The backend's CORS config whitelists http://localhost:3000 (our dev server port).
 * If you change the frontend port, update the backend's @CrossOrigin origins too.
 */
const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10_000, // 10 s
});

/**
 * Response interceptor — normalises error messages so every caught error
 * has a human-readable `.message` string regardless of backend response shape.
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = 'An unexpected error occurred. Please try again.';

    if (error.response) {
      // Server returned a response with a non-2xx status
      const data = error.response.data;
      if (typeof data === 'string' && data.length > 0) {
        message = data;
      } else if (data?.message) {
        message = data.message;
      } else if (data?.error) {
        message = data.error;
      } else {
        message = `Server error: ${error.response.status}`;
      }
    } else if (error.request) {
      // Request was made but no response received (backend down?)
      message =
        'Cannot reach the backend. Make sure the Spring Boot server is running on port 8080.';
    } else {
      message = error.message;
    }

    return Promise.reject(new Error(message));
  }
);

export default apiClient;
