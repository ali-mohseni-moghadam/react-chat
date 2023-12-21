import React from "react";
import Login from "./components/Login";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
