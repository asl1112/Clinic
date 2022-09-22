import React, { Component } from 'react'
import f from  '../css/Footer.module.css'
import logo from '../img/logo.png'
import footer_img from '../img/footer.png'

export default class Footer extends Component {
  render() {
    return (
      <div>
        
        <footer className={f.footer}>
            <div className={f.footer_body}>
              <h3 className={f.footer_title}>Formulario de contacto</h3>
              <form className={f.footer_form}>
                    <div className={f.form_top}>
                      <input type="text" className={f.form_inp} />
                      <input type="text" className={f.form_inp} />
                      <input type="text" className={f.form_inp} />
                      <input type="text" className={f.form_inp} />
                    </div>
                    <input type="text" className={f.message_inp} />
              </form>
              <img src={footer_img} alt='' className={f.footer_img} />
            </div>
      
            <div className={f.bottom}>
              <div className={f.logo}>
                <img src={logo} alt="" className={f.logo_img} />
              </div>
            </div>
        </footer>

      </div>
    )
  }
}
