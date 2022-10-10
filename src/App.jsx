import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./components/home/home";
import ContactForm from "./components/home/ContactForm";

import { FormspreeProvider } from "@formspree/react";
import Cart from "./components/products/cart";
import Puff from "./components/products/puff";
import Nap from "./components/products/nap";
import Rain from "./components/products/rain";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/rain" element={<Rain />} />
        <Route path="/nap" element={<Nap />} />
        <Route path="/puff" element={<Puff />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
