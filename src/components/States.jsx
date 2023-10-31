import React, { useState } from "react";
import classes from "./Common.module.css";
export default function States() {
  const [state, setState] = useState("initial value");
  const [condition, setCondition] = useState(false);
  const [mode, setMode] = useState(false);

  console.log("This is re-render");
  const clickHandler = () => {
    setState("new value");
  };

  const clickHandler1 = () => {
    setCondition(true);
  };

  const clickHandler2 = () => {
    setMode((prevState) => !prevState);
  };

  const toggledClass = mode ? classes.light : classes.dark;

  return (
    <div className={toggledClass}>
      <h2>useState use case</h2>
      <h3>1.State management</h3>
      <hr />
      <button onClick={clickHandler}>Set state</button>
      <p>{state}</p>

      <h3>2.Conditional Rendering</h3>
      <button onClick={clickHandler1}>Set condition</button>
      {condition && <p>Hello!</p>}

      <h3>3.Toggle flags</h3>
      <button onClick={clickHandler2}>Toggle display mode</button>
    </div>
  );
}
