var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');
import * as actions from 'actions';
import * as Redux from 'react-redux';


import BacusLawAPI from 'BacusLawAPI';


export var Footer = React.createClass({

  footerRender: function() {
    //if(BacusLawAPI.checkUserDevice() || this.state.width < 800) {
    var {nav, dispatch} = this.props;
    var profileString = nav ? "/perfil" : "/profile";
    //if(BacusLawAPI.checkUserDevice()) {
      if(1 === 0) {
      return (
        <div>
          {/*Mobile Nav Bar*/}
          <div className="title-bar">
            <div className="title-bar-left">
              <button className="menu-icon mobileHamburger" type="button" data-open="offCanvas"></button>
              <div className="title-bar-title center">
                <img
                  className='mobilelogo'
                  src='/assets/logo.jpg'
                  alt='logo' />
              </div>
            </div>
            <div className="title-bar-right">
              <div className="phoneNumber">(832) 910-7923</div>
            </div>
          </div>

          {/*Off-Canvas*/}
          <body>
            <div class="off-canvas position-left" id="offCanvas" data-off-canvas>

              {/*Close Button*/}
              <button class="close-button" aria-label="Close menu" type="button" data-close>
                <span aria-hidden="true">&times;</span>
              </button>

              {/*Menu*/}
              <ul class="vertical menu">
                <li><Link to='/profile' activeClassName='active-link'>Attorney Profile</Link></li>
                <li><Link to='/contact' activeClassName='active-link'>Contact</Link></li>
                <li><Link to='/clients' activeClassName='active-link'>Detained Clients</Link></li>
                <li><Link to='/areas' activeClassName='active-link'>Practice Areas</Link></li>
                <li><Link to='/perfil' activeClassName='active-link'>En Español</Link></li>
              </ul>
            </div>

            <div class="off-canvas-content" data-off-canvas-content>
            </div>
          </body>
        </div>
      )
    } else {
      if (!nav) {
        return (
          <footer>
            <div className="wrap row small-up-1 medium-up-3">
              <div className="column">
                <h4>Contact Info</h4>
                <hr/>
                <a><a href="https://www.google.com/maps/place/11040+East+Fwy,+Houston,+TX+77029/@29.7725893,-95.2357585,17z/data=!3m1!4b1!4m5!3m4!1s0x8640bca93370032f:0x46ec39714c012dd9!8m2!3d29.7725893!4d-95.2335698" target="_blank">11040 East Fwy</a><a href="https://www.google.com/maps/place/11040+East+Fwy,+Houston,+TX+77029/@29.7725893,-95.2357585,17z/data=!3m1!4b1!4m5!3m4!1s0x8640bca93370032f:0x46ec39714c012dd9!8m2!3d29.7725893!4d-95.2335698" target="_blank">Houston, TX 77029</a></a>
                <a href="tel:+1-832-910-7923">(832) 910-7923</a>
              </div>

              <div className="column">
                <h4>Site Map</h4>
                <hr/>
                  <a><Link to='/profile' activeClassName='active-link'>Attorney Profile</Link></a>
                  <a><Link to='/contact' activeClassName='active-link'>Contact</Link></a>
                  <a><Link to='/clients' activeClassName='active-link'>Detained Clients</Link></a>
                  <a><Link to='/areas' activeClassName='active-link'>Practice Areas</Link></a>
                  <a><Link to='/perfil' className='bold' activeClassName='active-link'><div onClick={() => {
                    dispatch(actions.toggleLanguage())
                    }
                  }>En Español</div></Link></a>
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
          <div>
            <div className="top-bar" id="nav-menu">
              <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                  <li><Link to={profileString} activeClassName='active-link'><img
                    className='logo'
                    src='/assets/logo.jpg'
                    alt='logo' />
                  </Link></li>
                  <li><Link to='/perfil' activeClassName='active-link'>Perfil de Abogado</Link></li>
                  <li><Link to='/contacto' activeClassName='active-link'>Información del Contacto</Link></li>
                  <li><Link to='/clientes' activeClassName='active-link'>Clientes Detenidos</Link></li>
                  <li><Link to='/servicios' activeClassName='active-link'>Servicios</Link></li>
                  <li><Link to='/profile' activeClassName='active-link'><div onClick={() => {
                    dispatch(actions.toggleLanguage())
                    }
                  }>In English</div></Link></li>
                </ul>
              </div>
              <div className="top-bar-right">
                <ul className="dropdown menu" data-dropdown-menu>
                  <li>hello</li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
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


// <div className="top-bar" id="nav-menu">
//   <div className="top-bar-left">
//     <ul className="dropdown menu" data-dropdown-menu>
//       <li><Link to={profileString} activeClassName='active-link'><img
//         className='logo'
//         src='/assets/logo.jpg'
//         alt='logo' />
//       </Link></li>

//     </ul>
//   </div>
//   <div className="top-bar-right topRight">
//     <ul className="dropdown menu" data-dropdown-menu>
//       <div className="freeConsultation">Free Consultation</div>
//       <div className="navNumber"><a href="tel:+1-832-910-7923">(832) 910-7923</a></div>
//     </ul>
//   </div>
// </div>