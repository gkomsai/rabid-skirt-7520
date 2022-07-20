import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default AllRoutes