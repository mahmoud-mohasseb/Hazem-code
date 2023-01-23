import { createSlice } from "@reduxjs/toolkit";
import { syr } from "../data/syr";

export let foodSyrSlice = createSlice({
    name: 'syr',
    initialState: {
        foods: syr,
    }
})

export default foodSyrSlice.reducer