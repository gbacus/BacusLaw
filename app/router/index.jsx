import React from "react";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import English from 'English';
import Espanol from 'Espanol';
// import firebase from 'app/firebase/';


// var requireLogin = (nextState, replace, next) => {
//   if (!firebase.auth().currentUser) {
//     replace('/');
//   }
//   next();
// };

// var redirectIfLoggedIn = (nextState, replace, next) => {
//   if (firebase.auth().currentUser) {
//     replace('/todos');
//   }
//   next();
// };

// export default (
//   <Router history={hashHistory}>
//     <Route path="/">
//       <Route path="esp" component={Espanol}/>
//       <IndexRoute component={}/>
//     </Route>
//   </Router>
// )