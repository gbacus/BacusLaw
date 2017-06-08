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
            <div className="row">
              <div className="callout secondary">
                <p>Having a loved one detained by Immigration and Customs Enforcement (ICE) is traumatic and confusing for the entire family.  It may be difficult to get even basic information about where they are, what rights they have, and how you can help them.  It can also be difficult to determine how long they may have to be detained, and if they are entitled to apply for relief.</p>

                <p className="bold">Bond and parole.</p>

                <p>  If a loved one is detained by Immigration and Customs Enforcement (ICE), they may be eligible to be released before their case has been resolved.  This is generally done by asking for a bond, or, in certain cases, parole.   If a detainee is offered bond, he or she is allowed to leave detention after someone gives money to the government to ensure they will attend future hearings on their case.  If a detainee is offered parole, no money is needed.</p>

                <p>Requesting bond and parole can be complicated, and the government usually requires evidence to demonstrate the detainee is not a danger to society or at risk of not attending future hearings.  If a detainee is eligible for bond or parole, Bacus Law can help maximize the chances he or she is offered this relief as quickly and cheaply as possible.</p>

                <p>Bacus Law has extensive experience in providing advice and legal representation for people detained by ICE.  If a loved one is detained by ICE, please call (832) 910-7923 as soon as possible for a free consultation on what can be done to help them.  You may also be able to locate them using this Online Detainee Locator System.</p>
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