import React, { useEffect, useState } from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App