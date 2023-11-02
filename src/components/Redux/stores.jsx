import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Reducers/CounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
