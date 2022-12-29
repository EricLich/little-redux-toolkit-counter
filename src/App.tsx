import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { decrement, increment, incrementByAmount } from "./slices/counterSlice";

function App() {
  const [count, setCount] = useState(0);
  const [increaseBy, setIncreaseBy] = useState<number>(0);
  const countRedux = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncreaseBy(): void {
    dispatch(incrementByAmount(increaseBy));
    setIncreaseBy((prev) => (prev = 0));
  }

  return (
    <div className="App">
      <h1>Vite + React + Redux toolkit + TS</h1>
      <div className="card">
        <h3>Counter with useState</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <h3>Counter with useState</h3>
        <input
          type="number"
          value={increaseBy}
          onChange={(e) =>
            setIncreaseBy((prev) => (prev = parseInt(e.target.value)))
          }
        />
        <button onClick={handleIncreaseBy}>Increase by amount</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <p>{countRedux}</p>
      </div>
    </div>
  );
}

export default App;
