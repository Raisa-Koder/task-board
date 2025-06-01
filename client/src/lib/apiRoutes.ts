const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const boardsAPI = `${API_BASE_URL}/api/boards`;
export const taskAPI = `${API_BASE_URL}/api/tasks`;