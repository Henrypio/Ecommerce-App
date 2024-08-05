import { useState } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/contact";
import About from "./pages/About";
import Account from "./pages/Account";
import Cart from "./pages/cart";
import PageNotFound from "./pages/PageNotFound";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import "@fontsource/inter/400.css";

import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { AuthProvider } from "./Redux/AuthContext";

function App() {
  return (
    <div>
      <Provider store={store}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<Account />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/productdetails" element={<ProductDetails />} />
            </Routes>
          </Router>
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
