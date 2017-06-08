var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');
import * as actions from 'actions';
import * as Redux from 'react-redux';
import BacusLawAPI from 'BacusLawAPI';
import * as temp from 'temp';
var GoogleMapsLoader = require('google-maps')


export var GoogleMap = React.createClass({

  initMap: function() {
    GoogleMapsLoader.KEY = temp.bananas.id;
    GoogleMapsLoader.load(function(google) {
      var map;
      var mapOptions = {
        center: new google.maps.LatLng(29.765511,-95.304302),
        zoom:10,
        backgroundColor: "#000000",
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        scrollwheel: false
      }
      map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
      var marker = new google.maps.Marker({
        position: {lat:29.772612,lng:-95.233610},
        map:map,
        title:"my marker"
      });
    })
  },

  render: function() {

    return (

      <div>
        <div id="map-canvas" className="map_canvas"></div>
        {this.initMap()}
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
)(GoogleMap);