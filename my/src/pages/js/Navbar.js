import React, { Component } from 'react'
import n from '../css/Navbar.module.css'
import { MdMenu } from 'react-icons/md'

export default class Navbar extends Component {
    openMenu=()=> {
      document.querySelector('#burger_menu').style = 'display: flex'
    }
  render() {
    return (
      <div>
        
        <nav className={n.nav}>
          <div className={n.logo}>
            <p className={n.logo_text}>Asindo <br /> <span>pediactrica</span></p>
          </div>
          <ul className={n.nav_item}>
            <a className={n.nav_list} href='/' >Inicio</a>
            <a className={n.nav_list} href='/Servicios'>Servicios</a>
            <a className={n.nav_list} href='/Profesionales'>Profesionales</a>
            <a className={n.nav_list} href='/Historia'>Historia</a>
            <a className={n.nav_list} href='#!'>Contacto</a>
          </ul>

          <MdMenu className={n.burger} onClick={this.openMenu} />
          <div className={n.burger_menu} id='burger_menu'>
          <ul className={n.menu_item}>
            <li className={n.menu_list} href='/'>Inicio</li>
            <li className={n.menu_list} href='/Servicios'>Servicios</li>
            <li className={n.menu_list} href='/Profesionales'>Profesionales</li>
            <li className={n.menu_list} href='/Historia'>Historia</li>
            <li className={n.menu_list} href='#!'>Contacto</li>
          </ul>
          </div>
        </nav>



      </div>
    )
  }
}