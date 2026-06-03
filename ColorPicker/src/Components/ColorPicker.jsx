import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("Pink");
  return (
    <div className="flex justify-center items-center flex-col min-h-screen gap-16 ">
      <h1
        style={{
          color,
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Selected Color: {color}
      </h1>
      <div className="flex flex-col items-center gap-4 ">
        <button
          className="btn btn-active bg-blue-800 w-18"
          onClick={() => setColor("Blue")}
        >
          Blue
        </button>
        <button
          className="btn btn-active bg-red-600 w-18"
          onClick={() => setColor("Red")}
        >
          Red
        </button>
        <button
          className="btn btn-active bg-green-500 w-18"
          onClick={() => setColor("Green")}
        >
          Green
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
