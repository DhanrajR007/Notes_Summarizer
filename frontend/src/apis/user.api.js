import { axiosInstance } from "./axiosInstance";

export const loginUser = async (email, password) => {
  const user = await axiosInstance.post("/auth/login", {
    email: email,
    password: password,
  });
  return user.data;
};
export const registerUser = async (formData) => {
  const user = await axiosInstance.post("/auth/register", formData);
  return user.data;
};

export const getCurrentUser = async () => {
  const user = await axiosInstance.get("/auth/me");
  return user.data;
};

export const getAllNotes = async () => {
  const notes = await axiosInstance.get("/allnotes");
  return notes.data;
};
