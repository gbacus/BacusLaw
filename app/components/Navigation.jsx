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
    console.log("TESTING THIS", BacusLawAPI.checkUserDevice());
    if(BacusLawAPI.checkUserDevice() || this.state.width < 670) {
      return (
        <div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle="example-menu"></button>
          <div className="title-bar-title center">
            <img
              className='mobilelogo'
              src='/assets/logo.jpg'
              alt='logo' />
          </div>
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