import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const cartSlice = createSlice({
  name: "cart",
  initialState: {},

  reducers: {},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
