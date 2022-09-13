import React, { Component } from 'react'
import f from  '../css/Footer.module.css'
import footerImg from '../img/footer.png' 
import logo from '../img/logo.png'

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
            </div>
      
            <div className={f.bottom}>
              <div className={f.logo}>
                <img src={logo} alt="" className={f.logo_img} />
              </div>
            </div>


            <img src={footerImg} alt="" className={f.footer_img} />
        </footer>

      </div>
    )
  }
}
