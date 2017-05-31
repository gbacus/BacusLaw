var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');
import * as actions from 'actions';
import * as Redux from 'react-redux';


export var Footer = React.createClass({

  footerRender: function() {
    var {nav, dispatch} = this.props;
    if (!nav) {
      return (
        <footer>
          <div className="wrap row small-up-1 medium-up-3">
            <div className="column">
              <h4>Contact Info</h4>
              <hr/>
              <a href="https://www.google.com/maps/place/11040+East+Fwy,+Houston,+TX+77029/@29.7725893,-95.2357585,17z/data=!3m1!4b1!4m5!3m4!1s0x8640bca93370032f:0x46ec39714c012dd9!8m2!3d29.7725893!4d-95.2335698" target="_blank">11040 East Fwy</a>
              <a href="https://www.google.com/maps/place/11040+East+Fwy,+Houston,+TX+77029/@29.7725893,-95.2357585,17z/data=!3m1!4b1!4m5!3m4!1s0x8640bca93370032f:0x46ec39714c012dd9!8m2!3d29.7725893!4d-95.2335698" target="_blank">Houston, TX 77029</a>
              <a href="tel:+1-832-910-7923">(832) 910-7923</a>
            </div>

            <div className="column">
              <h4>Site Map</h4>
              <hr/>
              <ul className="dropdown menu"
                data-magellan
                data-animation-duration={200}
                data-bar-offset={60}
                >
                <a href="#profile" >Attorney Profile</a>
                <a href="#contact" >Contact</a>
                <a href="#clients" >Detained Clients</a>
                <a href="#areas" >Practice Areas</a>
              </ul>
            </div>

            <div className="column">
              <h4>Social Media</h4>
              <hr/>
              <a href="https://twitter.com/" target="_blank">Twitter</a>
              <a href="https://www.linkedin.com/in/eric-bacus-8b08224/" target="_blank">LinkedIn</a>
              <a href="https://lawyers.justia.com/lawyer/eric-bacus-1519976" target="_blank">Justia</a>
            </div>

          </div>
        </footer>
      )
    } else {
      return (
        <footer>
          <div className="wrap row small-up-1 medium-up-3">
            <div className="column">
              <h4>Información del Contacto</h4>
              <hr/>
              <a href="https://www.google.com/maps/place/11040+East+Fwy,+Houston,+TX+77029/@29.7725893,-95.2357585,17z/data=!3m1!4b1!4m5!3m4!1s0x8640bca93370032f:0x46ec39714c012dd9!8m2!3d29.7725893!4d-95.2335698" target="_blank">11040 East Fwy</a>
              <a href="https://www.google.com/maps/place/11040+East+Fwy,+Houston,+TX+77029/@29.7725893,-95.2357585,17z/data=!3m1!4b1!4m5!3m4!1s0x8640bca93370032f:0x46ec39714c012dd9!8m2!3d29.7725893!4d-95.2335698" target="_blank">Houston, TX 77029</a>
              <a href="tel:+1-832-910-7923">(832) 910-7923</a>
            </div>

            <div className="column">
              <h4>Mapa del Sitio</h4>
              <hr/>
              <ul className="dropdown menu"
                data-magellan
                data-animation-duration={200}
                data-bar-offset={60}
                >
                <a href="#profile" >Perfil de Abogado</a>
                <a href="#contact" >Contacto</a>
                <a href="#clients" >Clientes Detenidos</a>
                <a href="#areas" >Servicios</a>
              </ul>
            </div>

            <div className="column">
              <h4>Redes Sociales</h4>
              <hr/>
              <a href="https://twitter.com/" target="_blank">Twitter</a>
              <a href="https://www.linkedin.com/in/eric-bacus-8b08224/" target="_blank">LinkedIn</a>
              <a href="https://lawyers.justia.com/lawyer/eric-bacus-1519976" target="_blank">Justia</a>
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
