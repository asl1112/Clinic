import React, { Component } from 'react'
import p from '../css/Profesionals.module.css'
import headerImg from '../img/footer.png'

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
                        
          </div>
        </section>

      </div>
    )
  }
}
