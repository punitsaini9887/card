import React from 'react'
import Navbar from './headercompont/Navbar'
import {Routes, Route } from "react-router-dom";
import Home from './headercompont/Home';
import Childern from './headercompont/Childern';
import Javlers from './headercompont/Javlers';
import Man from './headercompont/Man';
import Cartdata from './headercompont/Cartdata';
import Productform from './Controalpanlan/Productform';

export default function App() {
  return (
    <div>
    
      <Navbar/>
      <Routes>
           <Route path='/' element={<Home />} />
          <Route path="/children" element={<Childern />} />
          <Route path="/jevler" element={<Javlers />} />
          <Route path="/man" element={<Man />} /> 
          <Route path="/cart" element={<Cartdata />} /> 
          <Route path="/prdouct" element={<Productform />} /> 
      </Routes>

    </div>
  )
}
