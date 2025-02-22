import React, { useState } from "react";

function Input() {
  const [state, setState] = useState("");
  const handleInput = (e) => {
    setState(e.target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleInput} />
      <p>My name is {state}</p>
    </div>
  );
}

export default Input;
