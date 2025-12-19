import { createSummary } from "../apis/ai.api";
import { getCurrentUser } from "../apis/user.api";
import { login } from "../store/slice/authSlice";
import { redirect } from "@tanstack/react-router";

export const checkAuth = async ({ context }) => {
  try {
    const { queryClient, store } = context;
    const user = await queryClient.ensureQueryData({
      queryKey: ["currentUser"],
      queryFn: getCurrentUser,
    });
    if (!user) return false;
    store.dispatch(login(user));
    const { isAuthenticated } = store.getState().auth;
    if (!isAuthenticated) return false;
    return true;
  } catch (error) {
    console.log(error);
    return redirect({ to: "/auth" });
  }
};

export const manageData = async (file, text, generationType) => {
  if (generationType === "summary") {
    const data = await createSummary(text);
  } else if (generationType === "mcq") {
    const data = await createMCQ(text);
  } else if (generationType === "questions") {
    const data = await createQuestions(text);
  }
};
