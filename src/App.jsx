import React from "react";
import Login from "./components/Login";
import { Routes, Route, Navigate } from "react-router-dom";

// Context
import AuthContextProvider from "./context/AuthContextProvider";

import Chats from "./components/Chats";

const App = () => {
  return (
    <div className="app">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
