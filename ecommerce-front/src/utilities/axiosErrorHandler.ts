
// src/utilities/httpErrorHandler.ts
import axios from "axios";

const axiosErrorHandler = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || error.message;
  }
  return "An unexpected error occurred";
};

export default axiosErrorHandler;