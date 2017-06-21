import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import * as actions from 'actions';
import Footer from 'Footer';
import GoogleMap from 'GoogleMap';

import {FaEnvelope, FaPhoneSquare, FaFax, FaMapMarker} from 'react-icons/lib/fa'


//import * as actions from 'actions';

export var NachoPic = React.createClass({

  render() {

    return(
      <div>
        <img className="nacho" src="/assets/nancho.jpg" alt="Services"/>
      </div>
    )
  }
})

export default Redux.connect()(NachoPic);