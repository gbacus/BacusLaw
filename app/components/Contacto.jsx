import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import * as actions from 'actions';
import Footer from 'Footer';
import GoogleMap from 'GoogleMap';

import {FaEnvelope, FaPhoneSquare, FaFax, FaMapMarker} from 'react-icons/lib/fa'


//import * as actions from 'actions';

export var Contacto = React.createClass({

  render() {

    return(
      <div className="sections">
        <section id="contact" data-magellan-target="contact">
          <div className="callout small">
            <br></br>
            <div className="row">
              <div className="small-12 medium-12 large-12 columns callout textcenter">
                <h4 className="textcenter"><a href="mailto:eric@bacuslaw.com">
                <FaEnvelope/> eric@bacuslaw.com</a></h4>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 large-12 columns callout textcenter">
                <h4><a className="textcenter" href="tel:+1-832-910-7923">
                <FaPhoneSquare/> (832) 910-7923</a></h4>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 large-12 columns callout textcenter">
                <h4><FaFax/> Fax: (800) 823-3109</h4>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 large-12 columns callout textcenter">
                <h4><a href="https://www.google.com/maps/place/11040+East+Fwy,+Houston,+TX+77029/@29.7725893,-95.2357585,17z/data=!3m1!4b1!4m5!3m4!1s0x8640bca93370032f:0x46ec39714c012dd9!8m2!3d29.7725893!4d-95.2335698" target="_blank"><FaMapMarker/> 11040 East Fwy, Houston, TX 77029</a></h4>
              </div>
            </div>
            <div className="row">
              {/*<div className="small-6 medium-6 large-6 columns callout textcenter">
                <img className="imageResize" src='/assets/BacusLawOfficePic.png' alt='Bacus Law Office sPic' />
              </div>*/}
              <div className="small-12 medium-12 large-12 columns callout textcenter">
                <GoogleMap />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
})

export default Redux.connect()(Contacto);