import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import Footer from 'Footer';
import TwitterFeed from 'TwitterFeed';
import AccordianExample from 'AccordianExample';



//import * as actions from 'actions';

export var DetainedClients = React.createClass({

  render() {

    return(
      <div className="sections">
        <section id="clients" data-magellan-target="clients">
            <div className="row">
              <div className="callout alert">
                <h5>If you are trying to locate a loved one that may have been detained by I.C.E.</h5>
                <a href="https://locator.ice.gov/odls/homePage.do" target="_blank">Please click here for further contact information</a>
              </div>
            </div>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <img className="pancho" src="/assets/pancho.jpg" alt="Services"/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <AccordianExample />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </section>
      </div>
    )
  }
})

export default Redux.connect()(DetainedClients);