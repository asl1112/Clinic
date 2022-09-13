import React, { Component } from 'react'
import './App.css'
import Navbar from './pages/js/Navbar'
import Tener from './pages/js/Tener'
import Footer from './pages/js/Footer'


export default class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar />
        <Tener />
        <Footer />

      </div>
    )
  }
}

