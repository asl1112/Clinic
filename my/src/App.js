import React, { Component } from 'react'
import './App.css'
import Navbar from './pages/js/Navbar'
import Tener from './pages/js/Tener'

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Navbar />
        <Tener />

      </div>
    )
  }
}

