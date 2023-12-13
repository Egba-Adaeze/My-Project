import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ITBooks = {
  id: number
  title: string
  author: string;
  image: string;
  description: string;
  cover_image: string
};

const initialState: ITBooks[] = [];

export const bookSlice = createSlice({
  name: "bookSlice",
  initialState,
  reducers: {
    updateBook: (state, action: PayloadAction<ITBooks[]>) => {
      return [...action.payload];
    },
  },
});

export const { updateBook } = bookSlice.actions;

export default bookSlice.reducer;
