import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITAuth } from "../../interface";

const initialState: ITAuth = {
  id: "",
  fullName: "",
  isLoggedin: false,
  token: "",
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    updateAuth: (state, action: PayloadAction<ITAuth>) => {
      return { ...state, ...action.payload };
    },
    resetAuth: (state) => {
      return {...state, ...initialState};
    },
  },
});

export const { updateAuth, resetAuth } = authSlice.actions;

export default authSlice.reducer;
