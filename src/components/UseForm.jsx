import React, { useState } from "react";

function UseForm(initvalues) {
  const [values, setVales] = useState(initvalues);
  const handleChange = (e) => {
    const { name, value } = event.target;
    setVales({ ...values, [name]: value });
  };
  const resetForm = () => {
    setVales(initvalues);
  };
  return [values, handleChange, resetForm];
}

export default UseForm;
