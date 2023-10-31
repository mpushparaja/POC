import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import PageNoFound from "./components/PageNoFound";
import User from "./components/User";
import Hooks from "./components/Hooks";
import States from "./components/States";
import Reducer from "./components/Reducer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hook" element={<Hooks />} />
          <Route path="/states" element={<States />} />
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/users" element={<User />}>
            <Route path=":id" element={<About />} />
          </Route>
          <Route path="*" element={<PageNoFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
