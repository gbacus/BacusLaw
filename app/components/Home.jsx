import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import Footer from 'Footer';
import Letter from 'Letter';


//import * as actions from 'actions';

export var Home = React.createClass({

  render() {

    return(


      <div className="sections">
        <section id="home" data-magellan-target="home">
                <div className="ribbon textCenter">
                  {/*<div>Welcome to</div>
                  <div><img
                    className='logoHeading'
                    src='/assets/logo.jpg'
                    alt='logo' />
                  </div>*/}
                  <div className="ribbonText">
                    Welcome to Bacus Law - An Immigration Law Firm
                  </div>
              </div>
          <div>
            <div className="row">
              <div className="small-12 large-5 columns">
                <img className="ericResize" src="/assets/eric.jpg" alt="Bacus Law Logo"/>
                <div className="callToday">
                  <div className="introBold">Eric Bacus, Immigration Attorney</div>
                  <br></br>
                  <div className="intro">Call today for a free consultation.</div>
                  <div className="ital">Se Habla Español</div>
                  <div><a className="boldNumber" href="tel:+1-832-910-7923">(832) 910-7923</a></div>
                </div>
              </div>
              <div className="small-12 large-7 columns">
                <Letter />
              </div>
            </div>
          </div>
        </section>
        <br></br>
      </div>

    )
  }
})

export default Redux.connect()(Home);

