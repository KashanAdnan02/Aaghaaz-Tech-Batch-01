// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Home from "./pages/Home"
// import SignIn from './pages/SignIn'
// import SignUp from './pages/SignUp'
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/signin' element={<SignIn />} />
//         <Route path='/signup' element={<SignUp />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App