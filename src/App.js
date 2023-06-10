import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Product from "./pages/product/product";
import Checkout from "./pages/checkout/Checkout";
import Cart from "./pages/cart/Cart";

function App() {
  return <div>
    
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/product/:id" element={<Product/>}/>
        </Routes>
      <Footer/>
    </Router>
    
  </div>;
}

export default App;
