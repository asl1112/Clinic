import React, { Component } from 'react'
import './App.css'
import Navbar from './pages/js/Navbar'
import Inicio from './pages/js/Inicio'
import Servicios from '../src/pages/js/Servicios'
import Profesionales from '../src/pages/js/Profesionales'
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
            <Route path="/Profesionales" element={<Profesionales />} />
          </Routes>

        </BrowserRouter>
      </div>
    )
  }
}

