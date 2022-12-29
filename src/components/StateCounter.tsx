import React, { useState } from "react";

const StateCounter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="card">
      <h3>Counter with useState</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};

export default StateCounter;
