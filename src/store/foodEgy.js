import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { egypt } from "../data/egy";

export let foodEgy = createSlice({
    name: 'egy',
    initialState: {
        foods: egypt,
        loading: false
    },
    reducers: {}
})


export default foodEgy.reducer