import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import DevMode from "./DevMode";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path="/" />

        
        <Route element={<DevMode />} path="/dev" />
      </Routes>
    </BrowserRouter>
  );
}
