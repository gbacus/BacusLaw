import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import Footer from 'Footer';
import Letter from 'Letter';
import Carta from 'Carta';


//import * as actions from 'actions';

export var Home = React.createClass({

  render() {

    return(


      <div className="sections">
        <section id="home" data-magellan-target="home">
                <div className="ribbon textCenter">
                  {/*<div>Bienvenido a</div>
                  <div><img
                    className='logoHeading'
                    src='/assets/logo.jpg'
                    alt='logo' />
                  </div>*/}
                  <div className="ribbonText">
                    Bienvenido a Bacus Law - Una Agencia de la Ley de Inmigración
                  </div>
              </div>
          <div>
            <div className="row">
              <div className="small-5 medium-5 large-5 columns">
                <img className="ericResize" id="ericPhoto" src="/assets/eric.jpg" alt="Bacus Law Logo"/>
                <div className="callToday">
                  <div className="introBold">Eric Bacus, Abogado de Inmigración</div>
                  <br></br>
                  <div className="intro">Hábleme hoy por una consulta gratuita.</div>
                  <div className="ital">Se Habla Español</div>
                  <div><a className="boldNumber" href="tel:+1-832-910-7923">(832) 910-7923</a></div>
                </div>
              </div>
              <div className="small-7 medium-7 large-7 columns">
                <Carta />
              </div>
            </div>
          </div>
        </section>
        <br></br>
      </div>

    )
  }
})

export default Redux.connect()(Home);

