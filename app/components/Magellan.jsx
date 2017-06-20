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

export var Magellan = React.createClass({

  // componentDidUpdate: function(prevProps, prevState) {
  //   var {nav} = this.props;
  //   // only update chart if the data has changed
  //   console.log("prevProps", prevProps);
  //   console.log("prevState", prevState);
  //   console.log("nav", nav);
  //   if (prevProps.nav !== nav) {
  //     return (
  //       <div>
  //         {this.renderMagellan()}
  //       </div>
  //     )
  //   }
  // },


  // componentDidUpdate: function() {
  //   console.log('Within componentDidUpdate');
  //   return(
  //     this.renderMagellan()
  //   )
  // },

  renderMagellan: function() {
    var {nav} = this.props;
    if (!nav) {
      return (
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
    } else {
      return (
        <div>
          <Navigation />
          <Inicio />
          <Servicios />
          <NachoPic />
          <Perfil />
          <Contacto />
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