import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import Footer from 'Footer';

// https://publish.twitter.com/#

export var TwitterFeed = React.createClass({

  // shouldComponentUpdate: function(nextProps, nextState){
  //   return true;
  // },

  // componentWillUpdate: function(nextProps, nextState){
  //   //this.forceUpdate();
  //   //this.twitterfeed();
  // },

  // componentDidUpdate: function(prevProps, prevState){
  //   this.forceUpdate();

  //   this.twitterfeed();
  // },

  // componentDidMount: function() {
  //   this.forceUpdate();
  // },


  twitterfeed: function() {
    return(
      <div className="twitterfeed">
        <a className="twitter-timeline" data-lang="en" data-width="400" data-height="500" data-theme="dark" data-link-color="#2B7BB9" href="https://twitter.com/BacusLaw/lists/ImmigrationBacusLaw" />
      </div>
    )
  },

  render() {
    return (
      <div>
        {this.twitterfeed()}
      </div>
    )

  }
})

export default TwitterFeed;



