import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';


//import * as actions from 'actions';

export var AttorneyProfile = React.createClass({

  render() {

    return(
      <div>
        <Navigation />
        <br></br>

        <div className="row">
          <div className="small-12 medium-12 large-12 columns textCenter">
            <h1>Welcome to Bacus Law</h1>
            <h4>Eric Bacus</h4>
            <h5>-Immigration Attorney-</h5>
          </div>
        </div>
        <div className="row">
          <div className="small-12 medium-12 large-12 columns">
            <img className="imageResize" src="/assets/eric.jpg" alt="Bacus Law Logo"/>
          </div>
        </div>

      </div>
    )
  }
})

export default Redux.connect()(AttorneyProfile);