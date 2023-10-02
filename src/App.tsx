import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import styled from "styled-components";
import { ShoppingCardProvider } from "./context/ShoppingCardContext";

const Container = styled.div``;

const App: React.FC = () => {
  return (
    <React.Fragment>
      <ShoppingCardProvider>
        <Container>
          <Routes>
            <Route element={<Navbar />}>
              <Route path={"/"} element={<Home />} />
              <Route path={"/store"} element={<Store />} />
              <Route path={"/about"} element={<About />} />
            </Route>
          </Routes>
        </Container>
      </ShoppingCardProvider>
    </React.Fragment>
  );
};

export default App;
