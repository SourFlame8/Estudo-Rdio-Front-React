import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Compradas from './pages/compradas/compradas';
import Home from "./pages/home/home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Compradas"} element={<Compradas />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;