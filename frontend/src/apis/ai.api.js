export const createSummary = async () => {
  const response = await axios.post("/api/ai/summary", {
    text: textInput,
  });
  return response.data;
};
export const createMCQ = async () => {
  const response = await axios.post("/api/ai/mcq", {
    text: textInput,
  });
  return response.data;
};
export const createQuestions = async () => {
  const response = await axios.post("/api/ai/questions", {
    text: textInput,
  });
  return response.data;
};
