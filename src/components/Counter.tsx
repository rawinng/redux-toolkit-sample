import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/redux-store";
import { inc } from "../redux/slices/counterSlice";

const Counter = () => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const increase = () => {
    dispatch(inc());
  };

  return (
    <div data-testid="counter">
      <h1>{value}</h1>
      <button onClick={increase}>Increase value</button>
    </div>
  );
};

export default Counter;
