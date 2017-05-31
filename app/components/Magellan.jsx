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
import Footer from 'Footer';

import BacusLawAPI from 'BacusLawAPI';

export var Magellan = React.createClass({

  renderMagellan: function() {
    var {nav} = this.props;
    if (!nav) {
      return (
        <div>
          <Navigation />
          <AttorneyProfile />
          <ContactUs />
          <DetainedClients />
          <PracticeAreas />
          <Footer />
        </div>
      )
    } else {
      return (
        <div>
          <Navigation />
          <Perfil />
          <ContactUs />
          <Clientes />
          <Servicios />
          <Footer />
        </div>
      )
    }
  },

  render: function() {
    return (
      <div>
        {this.renderMagellan()}
      </div>
    )
  }

});

export default connect(
  (state) => {
    return {
      nav: state.nav
    };
  }
)(Magellan);