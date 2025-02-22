import React, { useRef } from "react";

function Timer() {
  const timere = useRef(0);
  const increment = (timere.current += 1);
  return (
    <div>
      <h1>type:{timere.current}</h1>
      <button onClick={increment}>kosh</button>
    </div>
  );
}

export default Timer;
