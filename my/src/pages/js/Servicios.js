import React, { Component } from 'react'
import s from '../css/Servicios.module.css'

export default class Servicios extends Component {
    render() {
        return (
            <div>
                
                <section className={s.header}></section>

                <section className={s.servis}>
                    <h2 className={s.servis_title}>Servicios</h2>
                    <div className={s.servis_body}>
                        <div className={s.card}>
                            <h3 className={s.card_title}>Gran equipo de pediatras</h3>
                            <p className={s.card_info}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. 
                                Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer
                            </p>
                        </div>

                         <div className={s.card}>
                            <h3 className={s.card_title}>Amplia cobertura</h3>
                            <p className={s.card_info}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. 
                                Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer
                            </p>
                        </div>

                         <div className={s.card}>
                            <h3 className={s.card_title}>Atención en su domicilio</h3>
                            <p className={s.card_info}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. 
                                Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer
                            </p>
                        </div>

                         <div className={s.card}>
                            <h3 className={s.card_title}>Asistencia privada</h3>
                            <p className={s.card_info}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci elit. 
                                Nunc ut diam a arcu sodales viverra sit amet eget elit. Vestibulum semper ac turpis nec dictum. Integer
                            </p>
                        </div>
                    </div>
                </section>

                <section className={s.map}>
                    <h3 className={s.map_title}>Zonas de cobertura</h3>
                    
                </section>

            </div>
        )
    }
}
