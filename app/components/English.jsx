// var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');
import * as actions from 'actions';
import * as Redux from 'react-redux';
import React from "react";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import AttorneyProfile from 'AttorneyProfile';
import ContactUs from 'ContactUs';
import DetainedClients from 'DetainedClients';
import PracticeAreas from 'PracticeAreas';
import Perfil from 'Perfil';
import Contacto from 'Contacto';
import Clientes from 'Clientes';
import Servicios from 'Servicios';
import Navigation from 'Navigation';
import Home from 'Home';
import Inicio from 'Inicio';
import Footer from 'Footer';
import NachoPic from 'NachoPic';

import BacusLawAPI from 'BacusLawAPI';


export var English = React.createClass({

  render() {

    return(
      <div>
        <Navigation />
        <Home />
        <PracticeAreas />
        <NachoPic />
        <AttorneyProfile />
        <ContactUs />
        <Footer />
      </div>
    )
  }
})

export default Redux.connect()(English);