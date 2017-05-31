import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import Footer from 'Footer';

export var Perfil = React.createClass({

  render() {
    return(
      <div className="sections">
        <section id="profile" data-magellan-target="profile" >
          <div className="callout small main">
            <div className="row">
              <div className="small-12 medium-12 large-12 columns textCenter">
                <h1>Bienvenido a Bacus Law</h1>
                <h4>Eric Bacus, Abogado de Inmigracíon</h4>
                <h6 className="ital">Se Habla Español</h6>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 large-12 columns">
                <img className="ericResize" src="/assets/eric.jpg" alt="Bacus Law Logo"/>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 large-12 columns textCenter">
                <h5>Llame hoy por una consulta gratuita</h5>
                <h5><a className="boldNumber" href="tel:+1-832-910-7923">(832) 910-7923</a></h5>
                <a
                  href="https://www.linkedin.com/in/eric-bacus-8b08224/"
                  target="_blank"
                  className="linkedInResize">
                  <img src='/assets/Logo-2C-128px-R.png' alt="linkedIn logo"/>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    )

  }
})

export default Redux.connect()(Perfil);
