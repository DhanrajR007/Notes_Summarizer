import { axiosInstance } from "./axiosInstance";

export const createSummary = async (textInput) => {
  const response = await axiosInstance.post("/ai/summary", {
    text: textInput,
  });
  return response.data;
};
export const createMCQ = async (textInput) => {
  const response = await axiosInstance.post("/ai/mcq", {
    text: textInput,
  });
  return response.data;
};
export const createQuestions = async (textInput) => {
  const response = await axiosInstance.post("/ai/questions", {
    text: textInput,
  });
  return response.data;
};
