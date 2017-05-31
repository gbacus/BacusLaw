var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');

var store = require('configureStore').configure();
import router from 'app/router/';
import Magellan from 'Magellan';



// Load foundation
//$(document).foundation();

$(document).ready(function(){
    $(document).foundation();
});

//App css
require('style!css!sass!applicationStyles')


ReactDOM.render(

  <div>
    <Provider store={store}>
      <Magellan />
    </Provider>
  </div>,
  document.getElementById('app')
);
