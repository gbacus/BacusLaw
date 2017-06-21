import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import GoogleMap from 'GoogleMap';
import * as actions from 'actions';
import Footer from 'Footer';
import {FaEnvelope, FaPhoneSquare, FaFax, FaMapMarker} from 'react-icons/lib/fa'


export var ContactUs = React.createClass({

  render() {

    return(
      <div className="sections">
        <br></br>
        <section id="contact" data-magellan-target="contact">
          <div>
            <div className="sectionHeader">Contact Information</div>
            <br></br>
              <div className="row">
                <div className="small-12 medium-12 large-12 columns textcenter">
                  <a href="mailto:eric@bacuslaw.com">
                    <div className="callout hoverContact" href="mailto:eric@bacuslaw.com">
                      <div className="textcenter">
                      <FaEnvelope/> eric@bacuslaw.com</div>
                    </div>
                  </a>
                  <a className="textcenter" href="tel:+1-832-910-7923">
                    <div className="callout hoverContact">
                      <div>
                      <FaPhoneSquare/> (832) 910-7923</div>
                    </div>
                  </a>
                  <div className="callout hoverContact">
                      <div><FaFax/> Fax: (800) 823-3109</div>
                  </div>
                  <a href="https://www.google.com/maps/place/11040+East+Fwy,+Houston,+TX+77029/@29.7725893,-95.2357585,17z/data=!3m1!4b1!4m5!3m4!1s0x8640bca93370032f:0x46ec39714c012dd9!8m2!3d29.7725893!4d-95.2335698" target="_blank">
                    <div className="callout hoverContact">
                      <div>Located in Gonzalez Family Medicine Building</div>
                      <div><FaMapMarker className="FaMapMarker"/> 11040 East Fwy, Houston, TX 77029</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="small-6 medium-6 large-6 columns callout textcenter">
                  <img className="imageResize" src='/assets/BacusLawOfficePic.png' alt='Bacus Law Office sPic' />
                </div>
                <div className="small-6 medium-6 large-6 columns callout textcenter">
                    <GoogleMap />
                </div>
              </div>
          </div>
        </section>
      </div>
    )
  }
})

export default Redux.connect()(ContactUs);