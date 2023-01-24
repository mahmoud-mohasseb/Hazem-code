import { createSlice } from "@reduxjs/toolkit";
import { syr } from "../../data/syr";

export const foodSyrSlice = createSlice({
  name: "syr",
  initialState: {
    foods: syr,
  },
});

export default foodSyrSlice.reducer;
