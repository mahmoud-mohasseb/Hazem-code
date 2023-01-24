import { createSlice } from "@reduxjs/toolkit";
import { ksa } from "../../data/ksa";

export const foodKsaSlice = createSlice({
  name: "ksa",
  initialState: {
    foods: ksa,
  },
});

export default foodKsaSlice.reducer;
