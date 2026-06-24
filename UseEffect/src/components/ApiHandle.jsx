import React, { useEffect, useState } from "react";

const ApiHandle = () => {
  const [userName, setUserName] = useState("");
  const [userData, setUserData] = useState({});
  console.log(userName);
  useEffect(() => {
    const apiCall = async () => {
      const fetchData = await fetch(
        `https://alfa-leetcode-api.onrender.com/${userName}`,
      );
      const data = await fetchData.json();
      setUserData(data);
    };
    apiCall();
  }, [userName]);

  return (
    <div className="flex justify-center flex-col items-center gap-8 h-screen font-bold text-3xl">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">What is your name?</legend>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          className="input"
          placeholder="Type here"
        />
      </fieldset>
      <div>{userData.name}</div>
    </div>
  );
};

export default ApiHandle;
