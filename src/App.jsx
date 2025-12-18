import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import DevMode from "./DevMode";
import Reservation from "./pages/reservation/Reservation";
import Location from "./pages/location/Location";
import Gallery from "./pages/gallery/Gallery";
import Menu from "./pages/menu/Menu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={<Reservation />} path="/reservation" />
        <Route element={<Location />} path="/location" />
        <Route element={<Gallery />} path="/gallery" />
        <Route element={<Menu />} path="/menu" />

        <Route element={<DevMode />} path="/dev" />
      </Routes>
    </BrowserRouter>
  );
}
