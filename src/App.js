import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes , Route } from "react-router-dom";
import Products from "./Components/Products";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Contact from "./Components/Contact";
import About from "./About";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>} />
        <Route  path="/product/:id" element={<Product/>} />
        <Route  path="/cart" element={<Cart/>} />
        <Route  path="/checkout" element={<Checkout/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
