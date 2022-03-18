import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes , Route } from "react-router-dom";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>} />
        <Route  path="/product/:id" element={<Product/>} />
        <Route  path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
