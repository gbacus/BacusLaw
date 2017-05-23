import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';


//import * as actions from 'actions';

export var DetainedClients = React.createClass({

  render() {

    return(
      <div>
        <Navigation />
        <br></br>
        <div className="callout alert">
          <h5>If you are trying to locate a loved one that may have been detained by I.C.E.</h5>
          <a href="https://locator.ice.gov/odls/homePage.do">Please click here for further contact information</a>
        </div>
      </div>
    )
  }
})

export default Redux.connect()(DetainedClients);