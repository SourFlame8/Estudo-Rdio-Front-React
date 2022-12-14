import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Compradas from "./pages/compradas/compradas";
import Home from "./pages/home/home";
import Pendentes from "./pages/pendentes/pendentes";
import Teste from "./pages/teste/teste";
import Navbar from "./components/navbar/navbar"
import Dev from "./pages/dev";
// import theme from "./services/theme";

function AppRoutes() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Compradas"} element={<Compradas />} />
          <Route path={"/Pendentes"} element={<Pendentes />} />
          <Route path={"/Teste"} element={<Teste />} />
          <Route path={"/Dev"} element={<Dev />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default AppRoutes;
