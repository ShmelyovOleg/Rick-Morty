import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharacterPage } from "./pages";
import { HomePage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character:id" element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
