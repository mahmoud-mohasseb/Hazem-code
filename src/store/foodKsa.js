import { createSlice } from "@reduxjs/toolkit";
import { ksa } from "../data/ksa";

export let foodKsaSlice = createSlice({
    name: 'ksa',
    initialState: {
        foods: ksa
    }
})

export default foodKsaSlice.reducer
