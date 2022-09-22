import React, { Component } from 'react'
import p from '../css/Profesionals.module.css'
import headerImg from '../img/footer.png'
import card_img from '../img/card.png'
import card_img2 from '../img/card1.png'
import card_img3 from '../img/card2.png'
import liamenosImg from '../img/img.png'
import logo from '../img/logo.png'

export default class Profesionales extends Component {
  render() {
    return (
      <div>
         
        <section className={p.header}>
            <h1 className={p.header_title}>Un gran equipo de <span>profesionales</span> para darte lo mejor</h1>
          <img src={headerImg} alt='img' className={p.header_img} />
        </section>

        <section className={p.card}>
          <div className={p.card_top}>
              <h2 className={p.card_title}>Conoce a nuestro equipo</h2>
              <p className={p.card_info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. Nunc ut diam a arcu 
              sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum.</p>
          </div>

          <div className={p.card_body}>

            <div className={p.card_list}>
              <img src={card_img3} alt=''  />
              <div className={p.list_texts}>
                <h5 className={p.list_title}>Dr. Luis Fernández </h5>
                <p className={p.list_info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer</p></div>
            </div>

            <div className={p.card_list}>
              <img src={card_img2} alt='' />
              <div className={p.list_texts}>
                <h5 className={p.list_title}>Dr. Luis Fernández </h5>
                <p className={p.list_info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer</p></div>
            </div>

            <div className={p.card_list}>
              <img src={card_img} alt='' />
              <div className={p.list_texts}>
                <h5 className={p.list_title}>Dr. Luis Fernández </h5>
                <p className={p.list_info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer</p></div>
            </div>

            <div className={p.card_list}>
              <img src={card_img3} alt='' />
              <div className={p.list_texts}>
                <h5 className={p.list_title}>Dr. Luis Fernández </h5>
                <p className={p.list_info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer</p></div>
            </div>

            <div className={p.card_list}>
              <img src={card_img2} alt='' />
              <div className={p.list_texts}>
                <h5 className={p.list_title}>Dr. Luis Fernández </h5>
                <p className={p.list_info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer</p></div>
            </div>

            <div className={p.card_list}>
              <img src={card_img} alt='' />
              <div className={p.list_texts}>
                <h5 className={p.list_title}>Dr. Luis Fernández </h5>
                <p className={p.list_info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer</p></div>
            </div>

            
          </div>
          
        </section>

      <section className={p.liamenos}>
        <div className={p.liamenos_left}>
          <img src={liamenosImg} className={p.liamenos_img} alt='img' />
        </div>
        <div className={p.liamenos_right}>
          <h3 className={p.liamenos_title}>¡Llámenos!</h3>
          <p className={p.liamenos_info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer </p>
          <button className={p.liamenos_btn}>Ver en el mapa</button>
        </div>

      </section>

      <div className={p.bottom}>
              <div className={p.logo}>
                <img src={logo} alt="" className={p.logo_img} />
              </div>
            </div>



      </div>
    )
  }
}
