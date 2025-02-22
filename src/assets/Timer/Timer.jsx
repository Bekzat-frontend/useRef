import React, { useRef, useState } from "react";

function Timer() {
  const [state, setState] = useState(0);
  const [render, setRender] = useState(false); 

  const interval = useRef(0);

  const handleState = () => {
    setState(state + 1);
  };

  const handleInterval = () => {
    interval.current += 1;
    setRender((prev) => !prev);
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
        <h1>{interval.current}</h1>
        <button onClick={handleInterval}>+</button>
      </div>
    </div>
  );
}

export default Timer;
