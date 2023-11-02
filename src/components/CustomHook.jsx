import React from "react";
import UseForm from "./UseForm";

export default function CustomHook() {
  const initValues = { email: "" };
  const [values, handleChange, resetForm] = UseForm(initValues);
  const handleSubmit = (e) => {
    event.preventDefault();
    try {
      console.log("Api Data", values);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
