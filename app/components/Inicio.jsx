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
                  <div>Bienvenido a</div>
                  <div><img
                    className='logoHeading'
                    src='/assets/logo.jpg'
                    alt='logo' />
                  </div>
              </div>
          <div className="callout small main">
            <div className="row">
              <div className="small-5 medium-5 large-5 columns">
                <img className="ericResize" src="/assets/eric.jpg" alt="Bacus Law Logo"/>
                <div className="callToday">
                  <div>Eric Bacus, Immigration Attorney</div>
                  <br></br>
                  <div>Call today for a free consultation.</div>
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
      </div>

    )
  }
})

export default Redux.connect()(Home);

