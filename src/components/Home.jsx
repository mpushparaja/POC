import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    // <div className="main">
    //   <div className="container">
    //     Home
    //     <br />
    //     <Link to="/about">About</Link>
    //     <br />
    //     <Link to="/hook">Hooks</Link>
    //   </div>
    // </div>
    <div className="container">
      <div className="item">Header</div>
      <div className="item2">
        <Link to="/about">About</Link>
      </div>
      <div className="item">
        <Link to="/hook">Hooks</Link>
      </div>
      <div className="item2">footer</div>
    </div>
  );
}
