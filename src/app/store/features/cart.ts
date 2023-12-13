import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITCart } from "../../interface";


const initialState: ITCart[] = [];

export const cartSlice = createSlice({
  name: "catrSlice",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ITCart>) => {
      const existingItemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].amount += action.payload.amount;
      } else {
        state.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
