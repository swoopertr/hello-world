import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/Login";
import Success from "./components/Success";

function App() {
  return (
    <>
      <BrowserRouter>
     
        <Routes>
          <Route index element={<Login />} />
          <Route path="success" element={<Success />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
