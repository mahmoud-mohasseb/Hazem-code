import { configureStore } from "@reduxjs/toolkit";
import foodEgy from "./foodEgy";
import foodKsaSlice from "./foodKsa";
import foodSyrSlice from "./foodSyr";

export default configureStore({
  reducer: {
    egy: foodEgy,
    ksa: foodKsaSlice,
    syr: foodSyrSlice,
  },
});
