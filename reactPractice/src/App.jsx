import React, { useContext } from 'react';
import {Routes, Route} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Product from './pages/Product';
import { DataContext } from './context/UserContext';

const App = () => {
  const username = useContext(DataContext)

  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes> */}
      <h1>App {username}</h1>
    </div>
  )
}

export default App
