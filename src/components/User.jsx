import React from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import "../App.css";

export default function User() {
  const { id } = useParams();
  let { state } = useLocation();
  let navigate = useNavigate();
  const redirect = () => {
    navigate("/", { replace: true });
  };
  return (
    <div>
      User {id}
      {/* <NavLink to="/about" style={active}></NavLink> */}
      <br />
      <p>State: {JSON.stringify(state)}</p>
      <br />
      <button onClick={redirect}> Back</button>
    </div>
  );
}
