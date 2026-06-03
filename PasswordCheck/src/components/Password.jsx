import React, { useState } from "react";

const Password = () => {
  const [pass, setPass] = useState("");
  const strength =
    pass.length === 0
      ? ""
      : pass.length < 6
        ? "Weak"
        : pass.length < 10
          ? "Medium"
          : "Strong";
  const color = pass.length < 6 ? "Red" : pass.length < 10 ? "Orange" : "Green";

  <h1>{strength}</h1>;
  return (
    <div className="min-h-screen flex flex-col gap-6 justify-center items-center">
      <label className="input validator">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
          </g>
        </svg>
        <input
          type="password"
          required
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </label>
      <h1 style={{ color: color }}>{strength}</h1>
    </div>
  );
};

export default Password;
