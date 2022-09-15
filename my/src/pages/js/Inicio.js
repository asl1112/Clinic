import React, { Component } from 'react'
import t from '../css/Tener.module.css'
import tenerImg from '../img/tenerImg.png'
import ampliaImg from '../img/ampliaImg.png'

export default class Tener extends Component {
  render() {
    return (
      <div>
        
        <header className={t.header}>
              <h1 className={t.header_title}>Primer servicio de <span>asistencia pediátrica</span> en Madrid</h1>
        </header>
        
        <section className={t.tener}>
            <div className={t.tener_body}>
                <div className={t.tener_left}>
                    <img src={tenerImg} alt='img' className={t.tener_img}></img>
                </div>
                <div className={t.tener_right}>
                    <h3 className={t.tener_title}>La tranquilidad de tener a los mejores pediátras sin tener que salir de casa</h3>
                    <p className={t.tener_info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer</p>
                    <button className={t.tener_btn}>Nuestro equipo</button>
                </div>
            </div>
        </section>

        <section className={t.boxes}>
            <div className={t.boxes_body}>
                <div className={t.box}></div>
                <div className={t.box}></div>
                <div className={t.box}></div>
                <div className={t.box}></div>
            </div>
        </section>

        <section className={t.experiencia}>
            <h3 className={t.experiencia_title}>Más de 20 años de experiencia</h3>
            <p className={t.experiencia_info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer blandit, eros vitae sagittis ornare, lorem nibh faucibus nisi, ut pharetra lacus sem sit amet risus. Proin placerat lectus </p>
            <button className={t.experiencia_btn}>Nuestra historia </button>
        </section>

        <section className={t.amplia}>
            <div className={t.amplia_body}>
                <div className={t.amplia_left}>
                    <img src={ampliaImg} alt="" className={t.amplia_img} />
                </div>
                <div className={t.amplia_right}>
                    <h3 className={t.amplia_title}>Amplia cobertura</h3>
                    <p className={t.amplia_info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer</p>
                    <button className={t.amplia_btn}>Ver en el mapa</button>
                </div>
            </div>
        </section>

        
      </div>
    )
  }
}