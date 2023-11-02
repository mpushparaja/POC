import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, userInfo } from "./Redux/Reducers/CounterSlice";
import Home from "./Home";

export default function Counter() {
  //   const [userInfo, SetUserInfo] = useState('');
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  // API use case
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://reqres.in/api/users/2");
      const userData = await response.json();
      console.log(userData?.data);
      dispatch(userInfo(userData.data));
    };
    fetchData();
  }, []);
  return (
    <div>
      Counter example with Redux:
      <div>{count}</div>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <Home />
    </div>
  );
}
