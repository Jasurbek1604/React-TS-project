import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import styled from "styled-components";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const Container = styled.div``;

const App: React.FC = () => {
  return (
    <ShoppingCartProvider>
      <Container>
        <Routes>
          <Route element={<Navbar />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/store"} element={<Store />} />
            <Route path={"/about"} element={<About />} />
          </Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
