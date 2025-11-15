import React from "react";
import "./style.css";
import HomePage from "./Pages/HomePage";
import { RouterProvider } from "react-router/dom";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
