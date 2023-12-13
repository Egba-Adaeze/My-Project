import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITCartMessageModal } from "../../interface";


const initialState: ITCartMessageModal = {
  message: "",
  display: false,
};


export const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    checkOut: (state, action: PayloadAction<ITCartMessageModal>) => {
      state = action.payload;
    },
  },
});

export const { checkOut } = modalSlice.actions;

export default modalSlice.reducer;
