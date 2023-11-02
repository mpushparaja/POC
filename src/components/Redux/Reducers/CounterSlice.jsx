import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const counterReducer = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    userInfo: (state) => {
      console.log(state);
    },
  },
});

export const { increment, decrement, userInfo } = counterReducer.actions;

export default counterReducer.reducer;
