var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');
import BacusLawAPI from 'BacusLawAPI';


export var Navigation = React.createClass({

  navBarRender: function() {
    console.log("TESTING THIS", BacusLawAPI.checkUserDevice());
    if(BacusLawAPI.checkUserDevice()) {
      return (
        <div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle="example-menu"></button>
          <div className="title-bar-title">Menu</div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="top-bar" id="nav-menu">
            <div className="top-bar-left">
              <ul className="dropdown menu" data-dropdown-menu>
                <li className="menu-text">Bacus Law</li>
                <li><Link to='/' activeClassName='active-link'>Home</Link></li>
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