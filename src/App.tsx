import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "./components";
import "./components/Button/button.scss";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
