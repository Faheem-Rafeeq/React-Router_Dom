import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../../screens/home";
import Products from "../../screens/products";
import About from "../../screens/about";
import Contact from "../../screens/contact";
import Navbar from '../../components/navbar';


const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
