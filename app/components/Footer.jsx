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
                <Link to='/profile' activeClassName='active-link'>Attorney Profile</Link>
                <Link to='/contact' activeClassName='active-link'>Contact</Link>
                <Link to='/clients' activeClassName='active-link'>Detained Clients</Link>
                <Link to='/areas' activeClassName='active-link'>Practice Areas</Link>
                <Link to='/perfil' className='bold' activeClassName='active-link'><div onClick={() => {
                  dispatch(actions.toggleLanguage())
                  }
                }>En Español</div></Link>
            </div>

            <div className="column">
              <h4>Social Media</h4>
              <hr/>
              <a>Twitter</a>
              <a>LinkedIn</a>
              <a>Justia</a>
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

                <Link to='/perfil' activeClassName='active-link'>Perfil de Abogado</Link>
                <Link to='/contacto' activeClassName='active-link'>Información del Contacto</Link>
                <Link to='/clientes' activeClassName='active-link'>Clientes Detenidos</Link>
                <Link to='/servicios' activeClassName='active-link'>Servicios</Link>
                <Link to='/profile' activeClassName='active-link'><div onClick={() => {
                  dispatch(actions.toggleLanguage())
                  }
                }>In English</div></Link>

            </div>

            <div className="column">
              <h4>Redes Sociales</h4>
              <hr/>
              <a>Twitter</a>
              <a>LinkedIn</a>
              <a>Justia</a>
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
