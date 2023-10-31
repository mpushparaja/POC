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

  const [counter, setCounter] = useState(0);

  const clickHandlerDecrease = () => {
    setCounter((prevState) => +prevState - 1);
  };

  const clickHandlerIncrease = () => {
    setCounter((prevState) => +prevState + 1);
  };

  const [starship, setStarship] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const clickHandler4 = async () => {
    setIsLoading(true);

    const response = await fetch("https://swapi.dev/api/starships/10");
    const data = await response.json();
    setStarship(JSON.stringify(data, null, "\t"));

    setIsLoading(false);
  };

  let message = "";
  if (isLoading) {
    message = <p>Getting data...</p>;
  }

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

      <h2>4.useState use case counter Example </h2>
      <h3>Counter</h3>
      <button onClick={clickHandlerDecrease}>--</button>
      <span> {counter} </span>
      <button onClick={clickHandlerIncrease}>++</button>

      <h3>5.Get API data and store it in state</h3>
      <button onClick={clickHandler4}>Get Millennium Falcon data</button>
      <p>{message}</p>
      <pre>{starship}</pre>
    </div>
  );
}
