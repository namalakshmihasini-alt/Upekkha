import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Page Imports
import Home from './pages/Home'
import Astitva from './pages/Astitva'
import Reports from './pages/Reports'
import OurPeople from './pages/OurPeople'
import Contact from './pages/Contact' // Ensure this matches your file name exactly

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/astitva" element={<Astitva />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/our-people" element={<OurPeople />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)