import axios from "axios";
import config from "./config";

const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAssignments = async () => {
  try {
    const response = await api.get("");
    return response.data;
  } catch (error) {
    console.error("Error fetching assignments:", error);
    throw error;
  }
};

export const getAssignment = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching assignment ${id}:`, error);
    throw error;
  }
};

export const submitAssignment = async (id, answers) => {
  try {
    const response = await api.post(`/${id}/submit`, { answers });
    return response.data;
  } catch (error) {
    console.error(`Error submitting assignment ${id}:`, error);
    throw error;
  }
};
