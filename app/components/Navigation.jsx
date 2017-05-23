var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');
import BacusLawAPI from 'BacusLawAPI';


export var Navigation = React.createClass({

  updateDimensions: function() {
    this.setState({width: $(window).width(), height: $(window).height()});
  },
  componentWillMount: function() {
    this.updateDimensions();
  },
  componentDidMount: function() {
    window.addEventListener("resize", this.updateDimensions);
  },
  componentWillUnmount: function() {
    window.removeEventListener("resize", this.updateDimensions);
  },

  navBarRender: function() {
    if(BacusLawAPI.checkUserDevice() || this.state.width < 800) {
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
              </ul>
            </div>

            <div class="off-canvas-content" data-off-canvas-content>
            </div>
          </body>



        </div>
      )
    } else {
      return (
        <div>
          <div className="top-bar" id="nav-menu">
            <div className="top-bar-left">
              <ul className="dropdown menu" data-dropdown-menu>
                <li><Link to='/' activeClassName='active-link'><img
                  className='logo'
                  src='/assets/logo.jpg'
                  alt='logo' />
                </Link></li>
                <li><Link to='/profile' activeClassName='active-link'>Attorney Profile</Link></li>
                <li><Link to='/contact' activeClassName='active-link'>Contact</Link></li>
                <li><Link to='/clients' activeClassName='active-link'>Detained Clients</Link></li>
                <li><Link to='/areas' activeClassName='active-link'>Practice Areas</Link></li>
              </ul>
            </div>
            <div className="top-bar-right">
              <ul className="dropdown menu phoneNumberMain" data-dropdown-menu>
                <li><Link activeClassName='active-link'>(832) 910-7923</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
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

export default connect()(Navigation);