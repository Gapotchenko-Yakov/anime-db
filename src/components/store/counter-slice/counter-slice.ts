import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    counter: {
      value: 0,
    },
  },
  reducers: {
    increase: (state) => {
      state.counter.value = state.counter.value + 1;
    },
    decrease: (state) => {
      state.counter.value = state.counter.value - 1;
    },
  },
});

export const { actions: counterSliceActions, reducer: counterSliceReducer } =
  counterSlice;
