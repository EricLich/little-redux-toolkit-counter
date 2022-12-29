import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../slices/counterSlice";
import { RootState } from "../store";

const ReduxCounter = () => {
  const [increaseBy, setIncreaseBy] = useState<number>(0);
  const countRedux = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncreaseBy(): void {
    dispatch(incrementByAmount(increaseBy));
    setIncreaseBy((prev) => (prev = 0));
  }

  return (
    <div>
      <h3>Counter with useState</h3>
      <input
        type="number"
        value={increaseBy}
        onChange={(e) =>
          setIncreaseBy((prev) => (prev = parseInt(e.target.value)))
        }
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={handleIncreaseBy}>Increase by amount</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <p>{countRedux}</p>
    </div>
  );
};

export default ReduxCounter;
