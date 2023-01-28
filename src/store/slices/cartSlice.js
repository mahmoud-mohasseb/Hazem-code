import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addToCart: (state = initialState, action) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action) => {
      return [...state.filter((item) => item.id !== action.payload.id)];

      // const index = state.indexOf(action.payload);
      // state.splice(index, 1);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
