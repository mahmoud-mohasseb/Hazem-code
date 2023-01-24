import { configureStore, combineReducers } from "@reduxjs/toolkit";
import foodEgy from "./slices/foodEgy";
import foodKsaSlice from "./slices/foodKsa";
import foodSyrSlice from "./slices/foodSyr";

const store = configureStore({
  reducer: {
    egy: foodEgy,
    ksa: foodKsaSlice,
    syr: foodSyrSlice,
  },
});
export default store;
