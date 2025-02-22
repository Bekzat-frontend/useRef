import React, { useRef, useState } from "react";

function Timer() {
  const [state, setState] = useState(0);
  const interval = useRef(0);
  const handleState = () => {
    setState(state + 1);
  };
  const handleInterval = () => {
    interval.current += 1;
  };
  return (
    <div>
      <div>
        <h1>Toso-1</h1>
        <h1>{state}</h1>
        <button onClick={handleState}>+</button>
      </div>
      <div>
        <h1>Toso-2</h1>
        <h1></h1>
        <button></button>
      </div>
    </div>
  );
}

export default Timer;
