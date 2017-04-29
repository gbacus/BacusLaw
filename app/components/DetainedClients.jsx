import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';


//import * as actions from 'actions';

export var DetainedClients = React.createClass({

  render() {

    return(
      <div>
        <Navigation />
        <p>DetainedClients Page</p>
      </div>
    )
  }
})

export default Redux.connect()(DetainedClients);