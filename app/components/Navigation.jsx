var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');
import * as actions from 'actions';
import * as Redux from 'react-redux';
import $ from 'jquery'

import BacusLawAPI from 'BacusLawAPI';


export var Navigation = React.createClass({

  updateDimensions: function() {
    this.setState({width: $(window).width(), height: $(window).height()});
    // console.log("1", document.body.scrollTop);
    // console.log("2", Math.ceil(this.getScrollTop()));
    // console.log("3", document.body.offsetHeight);
  },
  componentWillMount: function() {
    this.updateDimensions();
  },
  componentDidMount: function() {
    window.addEventListener("scroll", this.updateDimensions);
  },
  componentWillUnmount: function() {
    window.removeEventListener("scroll", this.updateDimensions);
  },

  getScrollTop: function (){
    if(typeof pageYOffset!= 'undefined'){
        //most browsers except IE before #9
        return pageYOffset;
    }
    else{
        var B= document.body; //IE 'quirks'
        var D= document.documentElement; //IE with doctype
        D= (D.clientHeight)? D: B;
        return D.scrollTop;
    }

  },

  navBarRender: function() {
    var {nav, dispatch} = this.props;
    var navString;

    if(Math.ceil(this.getScrollTop()) === 0) {
      navString = "sticky is-anchored is-at-top";
    } else {
      navString = "sticky is-at-top is-stuck";
    }

    //if(BacusLawAPI.checkUserDevice() || this.state.width < 800) {
    if(BacusLawAPI.isMobile()) {
      if(!nav) {
      return (
        <div data-sticky-container>
          {/*Mobile Nav Bar*/}
          <div className= {`title-bar ${navString}`} id="nav-menu" data-sticky data-options="marginTop:0;">
            <div className="title-bar-left">
              <button className="menu-icon mobileHamburger" type="button" data-open="offCanvas"></button>
            </div>
            <div className="title-bar-right">
                <a className='button mobileButton' onClick={() => {
                    dispatch(actions.toggleLanguage())
                    }
                  }>En Español</a>
              <a className="phoneNumber" href="tel:+1-832-910-7923">(832) 910-7923</a>
            </div>
          </div>

          {/*Off-Canvas*/}
          <body>
            <div className="off-canvas position-left" id="offCanvas" data-off-canvas>

              {/*Close Button*/}
              <button className="close-button" aria-label="Close menu" type="button" data-close="">
                <span aria-hidden="true">&times;</span>
              </button>

              {/*Menu*/}
              <ul className="vertical menu"
                data-magellan
                data-animation-duration={200}
                data-bar-offset={60}
              >
                <li data-close=""><a href='#home'>Home</a></li>
                <li data-close=""><a href='#areas'>Practice Areas</a></li>
                <li data-close=""><a href='#profile'>Attorney Profile</a></li>
                <li data-close=""><a href='#contact'>Contact</a></li>
              </ul>
            </div>

            <div className="off-canvas-content" data-off-canvas-content>
            </div>
          </body>
        </div>
      )
    } else {
      return (
        <div data-sticky-container>
          {/*Mobile Nav Bar*/}
          <div className= {`title-bar ${navString}`} id="nav-menu" data-sticky data-options="marginTop:0;">
            <div className="title-bar-left">
              <button className="menu-icon mobileHamburger" type="button" data-open="offCanvas"></button>
            </div>
            <div className="title-bar-right">
                <a className='button mobileButton' onClick={() => {
                    dispatch(actions.toggleLanguage())
                    }
                  }>In English</a>
              <a className="phoneNumber" href="tel:+1-832-910-7923">(832) 910-7923</a>
            </div>
          </div>

          {/*Off-Canvas*/}
          <body>
            <div className="off-canvas position-left" id="offCanvas" data-off-canvas>

              {/*Close Button*/}
              <button className="close-button" aria-label="Close menu" type="button" data-close="">
                <span aria-hidden="true">&times;</span>
              </button>

              {/*Menu*/}
              <ul className="vertical menu"
                data-magellan
                data-animation-duration={200}
                data-bar-offset={60}
              >
                <li data-close=""><a href='#home'>Inicio</a></li>
                <li data-close=""><a href='#areas'>Servicios</a></li>
                <li data-close=""><a href='#profile'>Attorney Profile</a></li>
                <li data-close=""><a href='#contact'>Contact</a></li>
              </ul>
            </div>

            <div className="off-canvas-content" data-off-canvas-content>
            </div>
          </body>
        </div>
      )
    }
    } else {
      if (!nav) {
        return (
          <div data-sticky-container>
            <div className={`top-bar ${navString}`} id="nav-menu" data-sticky data-options="marginTop:0;">
              <div className="top-bar-left">
                <ul className="dropdown menu"
                  data-magellan
                  data-animation-duration={200}
                  data-bar-offset={60}
                  >
                  <li><a href="#home"><img
                    className='logo'
                    src='/assets/logo.jpg'
                    alt='logo' />
                  </a></li>
                  <li><a href='#home'>Home</a></li>
                  <li><a href='#areas'>Practice Areas</a></li>
                  <li><a href='#profile'>Perfil de Abogado</a></li>
                  <li><a href='#contact'>Contacto</a></li>
                </ul>
              </div>
              <div className="top-bar-right">
                <ul className="dropdown menu">
                  <li><a className='button' onClick={() => {
                    dispatch(actions.toggleLanguage())
                    }
                  }>En Español</a></li>
                  <li>
                    <div className="freeConsultation">Free Consultation</div>
                    <div className="navNumber"><a href="tel:+1-832-910-7923">(832) 910-7923</a></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div data-sticky-container>
            <div className={`top-bar ${navString}`} id="nav-menu" data-sticky data-options="marginTop:0;">
              <div className="top-bar-left">
                <ul className="dropdown menu"
                  data-magellan
                  data-animation-duration={200}
                  data-bar-offset={60}
                  >
                  <li><a href="#home"><img
                    className='logo'
                    src='/assets/logo.jpg'
                    alt='logo' />
                  </a></li>
                  <li><a href='#home'>Inicio</a></li>
                  <li><a href='#areas'>Servicios</a></li>
                  <li><a href='#profile'>Perfil de Abogado</a></li>
                  <li><a href='#contact'>Contacto</a></li>
                </ul>
              </div>
              <div className="top-bar-right">
                <ul className="dropdown menu">
                  <li><a className='button' onClick={() => {
                    dispatch(actions.toggleLanguage())
                    }
                  }>In English</a></li>
                  <li>
                    <div className="freeConsultation">Consulta Gratuita</div>
                    <div className="navNumber"><a href="tel:+1-832-910-7923">(832) 910-7923</a></div>
                  </li>
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
        {this.navBarRender()}
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
)(Navigation);