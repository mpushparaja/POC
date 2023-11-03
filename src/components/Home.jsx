import React from "react";
import { Link } from "react-router-dom";
// import "./home.css";
import { useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="container">
      <div className="item">counter value {count}</div>
      <div className="item2">
        {" "}
        <Link to="/about">About</Link>
      </div>
      <div className="item">
        <Link to="/hook">Hooks</Link>
      </div>
      <div className="item2">footer</div>
    </div>
  );
}
