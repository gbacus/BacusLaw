import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import Footer from 'Footer';
import Letter from 'Letter';


//import * as actions from 'actions';

export var Inicio = React.createClass({

  render() {

    return(


      <div className="sections">
        <section id="home" data-magellan-target="home">
          <div className="callout small main">
            <div className="row">
              <div className="small-12 medium-12 large-12 columns">
                <div className="callout success textCenter">
                  <h2>Welcome to Bacus Law(SPANISH)</h2>
                  <h4>Eric Bacus, Immigration Attorney(SPANISH)</h4>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="small-5 medium-5 large-5 columns">
                <img className="ericResize" src="/assets/eric.jpg" alt="Bacus Law Logo"/>
                <div className="callout primary callToday">
                  <h5>Call today for a free consultation.(SPANISH)</h5>
                  <h6 className="ital">Se Habla Español(SPANISH)</h6>
                  <h5><a className="boldNumber" href="tel:+1-832-910-7923">(832) 910-7923(SPANISH)</a></h5>
                </div>
              </div>
              <div className="small-7 medium-7 large-7 columns">
                <Letter />
              </div>
            </div>
          </div>
        </section>
      </div>

    )
  }
})

export default Redux.connect()(Inicio);


     // {<div className="sections">
     //    <section id="profile" data-magellan-target="profile">
     //      <div className="callout small main">
     //        <div className="row">
     //          <div className="small-12 medium-12 large-12 columns textCenter">
     //            <h1>Welcome to Bacus Law</h1>
     //            <h4>Eric Bacus, Immigration Attorney</h4>
     //            <h6 className="ital">Se Habla Español</h6>
     //          </div>
     //        </div>
     //        <div className="row">
     //          <div className="small-12 medium-12 large-12 columns">
     //            <img className="ericResize" src="/assets/eric.jpg" alt="Bacus Law Logo"/>
     //          </div>
     //        </div>
     //        <div className="row">
     //          <div className="small-12 medium-12 large-12 columns textCenter">
     //            <h5>Call today for a free consultation.</h5>
     //            <h5><a className="boldNumber" href="tel:+1-832-910-7923">(832) 910-7923</a></h5>
     //            <a
     //              href="https://www.linkedin.com/in/eric-bacus-8b08224/"
     //              target="_blank"
     //              className="linkedInResize">
     //              <img src='/assets/Logo-2C-128px-R.png' alt="linkedIn logo"/>
     //            </a>
     //          </div>
     //        </div>
     //      </div>
     //      <Letter />
     //    </section>
     //  </div>}