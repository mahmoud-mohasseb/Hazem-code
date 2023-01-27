import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addToCart: (state = initialState, action) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
