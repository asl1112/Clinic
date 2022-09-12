import React, { Component } from 'react'
import n from '../css/Navbar.module.css'
import { MdMenu } from 'react-icons/md'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        
        <nav className={n.nav}>
          <div className={n.logo}>
            <p className={n.logo_text}>Asindo <br /> <span>pediactrica</span></p>
          </div>
          <ul className={n.nav_item}>
            <li className={n.nav_list}>Inicio</li>
            <li className={n.nav_list}>Servicios</li>
            <li className={n.nav_list}>Profesionales</li>
            <li className={n.nav_list}>Historia</li>
            <li className={n.nav_list}>Contacto</li>
          </ul>
          <MdMenu className={n.burger} />
        </nav>

        <header className={n.header}>
              <h1 className={n.header_title}>Primer servicio de <span>asistencia pediátrica</span> en Madrid</h1>
        </header>


      </div>
    )
  }
}