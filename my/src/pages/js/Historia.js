import React, { Component } from 'react'
import h from '../css/Historia.module.css'
import Footer from './Footer'
import header_img from '../img/header.png'

export default class Historia extends Component {
  render() {
    return (
      <div>
        
        <header className={h.header}>
          <div className={h.header_left}>
            <h2 className={h.header_title}><span>Nuestra historia</span> Más de 20 años a tu lado</h2>
          </div>
          <div className={h.header_right}>
            <img src={header_img} alt='img' className={h.header_img} />
          </div>
        </header>

        <section className={h.exper}>
            <h2 className={h.exper_title}>Más de 20 años de experiencia</h2>
            <p className={h.exper_info}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed nec orci elit.Nunc ut diam a arcu sodales viverra sit amet eget elit.Vestibulum semper ac turpis nec dictum.Integer blandit, eros vitae sagittis ornare, lorem nibh faucibus nisi, ut pharetra lacus sem sit amet risus.Proin placerat lectus Curabitur gravida, neque et accumsan tristique, lectus diam tincidunt lorem, sit amet ultrices nisi nunc eget odio.Donec feugiat ipsum eget tempor porttitor.Maecenas a dignissim metus.
                <span>Nam sit amet erat risus. Nam pretium vel lorem eget condimentum.Proin dapibus luctus tortor eget ornare.Integer in neque felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Nulla sed ex ipsum.Curabitur in porta urna, id tincidunt nulla.</span>
                Maecenas et ornare risus.Quisque vel ligula facilisis, varius dolor a, efficitur felis.Donec facilisis diam libero, ac aliquet velit convallis et.Phasellus urna velit, lobortis a mattis et, condimentum hendrerit sapien.Quisque pharetra, justo eu fermentum aliquam, mauris ligula pretium nisl, et pulvinar justo massa eget tellus.Nam sit amet ante tristique, rutrum sapien in , pellentesque ante.Mauris aliquet viverra est, eu auctor neque eleifend sit amet.Proin iaculis ligula non dapibus bibendum.Quisque massa tellus, imperdiet quis mattis nec, ornare a turpis.Vestibulum malesuada erat purus, sit amet cursus ante laoreet id.Integer vel finibus augue, id lobortis orci.Aenean et quam rutrum, rhoncus augue ac, tempus sem.
            </p>
        </section>

      <Footer />

      </div>
    )
  }
}
