import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import historyReducer from "./slice/hisorySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    history: historyReducer,
  },
});
