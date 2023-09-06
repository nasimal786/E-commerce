import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./modules/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./modules/products";
import Product from "./modules/product";
import Cart from "./modules/cart";


function App() {
  return (
    <div className="text-gray-600 text-4xl">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
