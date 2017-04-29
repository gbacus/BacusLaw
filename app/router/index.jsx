import React from "react";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import AttorneyProfile from 'AttorneyProfile';
import ContactUs from 'ContactUs';
import DetainedClients from 'DetainedClients';
import PracticeAreas from 'PracticeAreas';
import Home from 'Home';


export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="profile" component={AttorneyProfile} />
      <Route path="contact" component={ContactUs} />
      <Route path="clients" component={DetainedClients} />
      <Route path="areas" component={PracticeAreas} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
)
