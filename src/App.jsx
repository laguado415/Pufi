import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./components/home/home";
import ContactForm from "./components/home/ContactForm";

import { FormspreeProvider } from '@formspree/react';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
