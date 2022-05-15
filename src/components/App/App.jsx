import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../views/Header/Header";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../views/Home/HomePage.";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="settings" element={<div>Settings</div>} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </div>
  );
}

export default App;
