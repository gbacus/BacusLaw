var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = () => {
  // return(
  //   <div className='top-bar'>
  //     <div className='top-bar-left'>
  //       <ul className='menu'>
  //         <li className='menu-text'>
  //           Bacus Law
  //         </li>
  //         <li>
  //           <Link to='/' activeClassName='active-link'>Home</Link>
  //         </li>
  //         <li>
  //           <Link to='/profile' activeClassName='active-link'>Attorney Profile</Link>
  //         </li>
  //         <li>
  //           <Link to='/contact' activeClassName='active-link'>Contact</Link>
  //         </li>
  //         <li>
  //           <Link to='/clients' activeClassName='active-link'>Detained Clients</Link>
  //         </li>
  //         <li>
  //           <Link to='/areas' activeClassName='active-link'>Practice Areas</Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // );

  return(
    <div>
      <div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="Medium">
        <button className="menu-icon" type="button" data-toggle="example-menu"></button>
        <div className="title-bar-title">Menu</div>
      </div>

      <div className="top-bar" id="example-menu">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Bacus Law</li>
          <li>
            <Link to='/' activeClassName='active-link'>Home</Link>
          </li>
          <li>
            <Link to='/profile' activeClassName='active-link'>Attorney Profile</Link>
          </li>
          <li>
            <Link to='/contact' activeClassName='active-link'>Contact</Link>
          </li>
          <li>
            <Link to='/clients' activeClassName='active-link'>Detained Clients</Link>
          </li>
          <li>
            <Link to='/areas' activeClassName='active-link'>Practice Areas</Link>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

module.exports = Navigation;