import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';

//import * as actions from 'actions';

export var Home = React.createClass({

  render() {

    return(
      <div>
        <Navigation />
        <p>Home Page</p>
      </div>
    )
  }
})

export default Redux.connect()(Home);