import React, { useState } from "react";

const CharCounter = () => {
  const [text, setText] = useState("");
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-lg">Enter Text</legend>
        <textarea
          className="textarea h-24 resize-none"
          placeholder="Enter text here...."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </fieldset>
      <h1
        style={{
          color: text.length > 50 ? "red" : "green",
          fontSize: "32px",
          fontWeight: "700",
        }}
      >
        Characters : {text.length}
      </h1>
    </div>
  );
};

export default CharCounter;
