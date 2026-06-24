import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen gap-5">
        <div>{count}</div>
        <div className="space-x-4">
          <button
            className="btn btn-success p-2 rounded-lg font-bold"
            onClick={() => setCount((prev) => prev + 1)}
          >
            Increase
          </button>
          <button
            className="btn btn-success p-2 rounded-lg font-bold"
            onClick={() => setCount((prev) => prev - 1)}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
