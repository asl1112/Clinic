import React, { Component } from 'react'
import './App.css'
import Navbar from './pages/js/Navbar'
import Inicio from './pages/js/Inicio'
import Footer from './pages/js/Footer'
import Servicios from '../src/pages/js/Servicios'
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter >
        <Navbar />

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Servicios" element={<Servicios />} />
          </Routes>

        <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

