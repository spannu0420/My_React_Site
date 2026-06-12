import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Core Layout Components
// Pages Components
import NavScrollExample from './MDA/Navbar';
import FluidExample from './MDA/Home';
import About_us from './MDA/About_us';
import Why_us from './MDA/Why_us';
import Contact from './MDA/Contact';
import Blog from './MDA/Blog';
import Products from './MDA/Products';
import Seed_Drill_Pro from './MDA/Category_1';
import Cultivator_Shovels_Pro from './MDA/category_2';
import Duck_Sweeps_Pro from './MDA/Caterory_5';
import Tiller_Duck_Pro from './MDA/Category_4';
import Footer from './MDA/Footer';
import Inter_Shovels_Pro from './MDA/Category_3';
import M_B_Plough_Pro from './MDA/M_B';
import Rotary_Pro from './MDA/Rotary_Blades';
import Rotavator_Pro from './MDA/Rotavator';
import Plough from './MDA/Plough';
import Sub_Soiler from './MDA/Sub_soiler_blades';
import FloatingButtons from './MDA/Floting_Buttons';
import Certificates from './MDA/Certificates';

function App() {
  return (
    <Router>
      {/* Floating buttons standard syntax */}
      <FloatingButtons />
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<FluidExample />} />
        <Route path="/about" element={<About_us />} />
        <Route path="/why-choose-us" element={<Why_us />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/seed-drill-parts" element={<Seed_Drill_Pro />} />
        <Route path="/cultivator-shovels" element={<Cultivator_Shovels_Pro />} />
        <Route path="/duck-foot-sweeps" element={<Duck_Sweeps_Pro />} />
        <Route path="/tiller-duck-foot" element={<Tiller_Duck_Pro />} />
        <Route path="/inter-cultivator-shovels" element={<Inter_Shovels_Pro />} />
        <Route path="/mb-plough-shear" element={<M_B_Plough_Pro />} />
        <Route path="/rotary-tiller-blades" element={<Rotary_Pro />} />
        <Route path="/rotavator-parts" element={<Rotavator_Pro />} />
        <Route path="/plough-parts" element={<Plough />} />
        <Route path="/sub-soiler-blades" element={<Sub_Soiler />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
