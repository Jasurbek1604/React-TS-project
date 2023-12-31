import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route element={<Navbar />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/store"} element={<Store />} />
          <Route path={"/about"} element={<About />} />
        </Route>
      </Routes>
    </ShoppingCartProvider>
  );
};

export default App;
