export const summaryPrompt = () => {
  const prompt = `
    You will get data from the user. The data can be text or any file (PDF, DOCX, images with text, etc.).

Your job:
1. Read and extract all text from the user’s input.
2. Understand the main ideas, details, tone, and purpose.
3. Create a summary based on the size of the data:

   - Small data → very short summary (2–4 lines)
   - Medium data → short summary (1–2 paragraphs)
   - Large data → long summary (3–6 paragraphs)
   - Very large data → detailed multi-section summary with headings

4. Never remove important points.
5. Keep the meaning correct and simple.
6. After the summary, give:
   - 5 key points
   - 5 important terms with meaning
   - 1-line “main idea” at the end

Rules:
- If user uploads a file, extract text first.
- If text is unclear or low quality, clean it and then summarize.
- Never guess facts not in the data.
- Keep output clean, short, and easy to read.
`;
  return prompt;
};
export const mcqPrompt = () => {
  const prompt = `
    You will get data from the user. The data can be text or a file.

Your job:
1. Read and understand the full content.
2. Create MCQs from the data only.
3. Do not add your own ideas.

Rules for MCQs:
- Always create 10 MCQs (or more if user asks).
- Each MCQ must have:
  - One question
  - Four options (A, B, C, D)

Extra:
- Make questions simple and clear.
- No answers. Only questions.
- Use only the information from the user’s data.
- Do not guess anything that is not written in the content.

`;
  return prompt;
};
export const questionPrompt = () => {
  const prompt = `
    You will get data from the user. The data can be text or a file.

Your job:
1. Read the full content.
2. Create questions only from the given data.
3. Do not add anything from outside the data.

Rules:
- Make 10 questions (or more if the user asks).
- Keep the questions simple and clear.
- Use only the important points of the content.
- Do not guess or create facts that are not written.
- No answers. Only questions.

`;
  return prompt;
};
