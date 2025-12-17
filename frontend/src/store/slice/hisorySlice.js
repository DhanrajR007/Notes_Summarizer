// historySlice.js
import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
  name: "history",
  initialState: {
    items: [],
  },
  reducers: {
    setHistoryItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setHistoryItems } = historySlice.actions;
export default historySlice.reducer;
