import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-12">
      <h1 className="text-6xl font-bold">{count}</h1>
      <div className="space-x-4">
        <button
          className="btn btn-soft btn-success"
          onClick={() => setCount((prev) => prev + 1)}
          disabled={count >= 100}
        >
          Increment
        </button>
        <button
          className="btn btn-outline btn-warning"
          onClick={() => setCount((prev) => prev - 1)}
          disabled={count <= 0}
        >
          Decrement
        </button>
        <button
          className="btn btn-outline"
          onClick={() => setCount(0)}
          disabled={count === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
