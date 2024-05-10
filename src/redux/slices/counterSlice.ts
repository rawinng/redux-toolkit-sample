import { createSlice } from "@reduxjs/toolkit";

// counter slice reducer
interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc: (state) => {
      state.value += 1;
    },
  },
});

export const { inc } = counterSlice.actions;
export default counterSlice.reducer;
