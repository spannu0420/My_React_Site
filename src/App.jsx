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
      <div className="App">
        {/* Header/Navbar */}
        <NavScrollExample />

        {/* Dynamic Content Routes */}
        <Routes>
          {/* Default/Home Routes */}
          <Route path="/" element={<FluidExample />} />
          <Route path="/Home" element={<FluidExample /> } />
          
          {/* Main Pages */}
          <Route path="/About_us" element={<About_us />} />
          <Route path="/why_us" element={<Why_us />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Products" element={<Products />} />

          {/* Categories Pages */}
          <Route path="/Seed_Drill_Pro" element={<Seed_Drill_Pro />} />
          <Route path="/Cultivator_Shovels_Pro" element={<Cultivator_Shovels_Pro />} />
          <Route path="/Inter_Shovels_Pro" element={<Inter_Shovels_Pro />} />
          <Route path="/Tiller_Duck_Pro" element={<Tiller_Duck_Pro />} />
          <Route path="/Duck_Sweeps_Pro" element={<Duck_Sweeps_Pro />} />
          <Route path='/M_B_Plough_Pro' element={<M_B_Plough_Pro />} />
          <Route path='/Rotary_Pro' element={<Rotary_Pro />} />
          <Route path='/Rotavator_Pro' element={<Rotavator_Pro />} />
          <Route path='/Plough' element={<Plough />} />
          <Route path='/Sub_Soiler' element={<Sub_Soiler />} />
          <Route path='/Certificates' element={<Certificates />} />






          </Routes>

          <FloatingButtons />

        {/* Footer */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;