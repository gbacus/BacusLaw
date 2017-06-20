var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');
import * as actions from 'actions';
import * as Redux from 'react-redux';
import {FaEnvelope, FaPhoneSquare, FaFax, FaMapMarker} from 'react-icons/lib/fa'


export var Footer = React.createClass({

  footerRender: function() {
    var {nav, dispatch} = this.props;
    if (!nav) {
      return (
        <footer>
          <div className="wrap row small-up-1 medium-up-2">
            <div className="column">
              <div>Contact Information</div>
              <hr/>
              <a href="mailto:eric@bacuslaw.com"><FaEnvelope/> eric@bacuslaw.com</a>
              <a href="tel:+1-832-910-7923"><FaPhoneSquare/> (832) 910-7923</a>
              <a href="https://www.google.com/maps/place/11040+East+Fwy,+Houston,+TX+77029/@29.7725893,-95.2357585,17z/data=!3m1!4b1!4m5!3m4!1s0x8640bca93370032f:0x46ec39714c012dd9!8m2!3d29.7725893!4d-95.2335698" target="_blank"><FaMapMarker/>11040 East Fwy
                <br></br>
                Houston, TX 77029
              </a>
            </div>

            <div className="column">
              <div>Site Map</div>
              <hr/>
              <ul className="dropdown menu"
                data-magellan
                data-animation-duration={200}
                data-bar-offset={60}
                >
                <a href="#home" >Home</a>
                <a href="#areas" >Practice Areas</a>
                <a href="#profile" >Attorney Profile</a>
                <a href="#contact" >Contact</a>
              </ul>
            </div>

          </div>
        </footer>
      )
    } else {
      return (
        <footer>
          <div className="wrap row small-up-1 medium-up-2">
            <div className="column">
              <div>Información del Contacto</div>
              <hr/>
              <a href="mailto:eric@bacuslaw.com"><FaEnvelope/> eric@bacuslaw.com</a>
              <a href="tel:+1-832-910-7923"><FaPhoneSquare/> (832) 910-7923</a>
              <a href="https://www.google.com/maps/place/11040+East+Fwy,+Houston,+TX+77029/@29.7725893,-95.2357585,17z/data=!3m1!4b1!4m5!3m4!1s0x8640bca93370032f:0x46ec39714c012dd9!8m2!3d29.7725893!4d-95.2335698" target="_blank"><FaMapMarker/>11040 East Fwy
                <br></br>
                Houston, TX 77029
              </a>
            </div>

            <div className="column">
              <div>Mapa del Sitio</div>
              <hr/>
              <ul className="dropdown menu"
                data-magellan
                data-animation-duration={200}
                data-bar-offset={60}
                >
                <a href="#home" >Inicio</a>
                <a href="#areas" >Servicios</a>
                <a href="#profile" >Perfil de Abagado</a>
                <a href="#contact" >Contacto</a>
              </ul>
            </div>

          </div>
        </footer>
      )
    }
  },

  render: function() {
    return (
      <div>
        {this.footerRender()}
      </div>
    )
  }

});

export default connect(
  (state) => {
    return {
      nav: state.nav
    };
  }
)(Footer);
