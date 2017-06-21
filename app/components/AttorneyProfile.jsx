import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import Footer from 'Footer';
import Letter from 'Letter';
import Quote1 from 'Quote1';

//import * as actions from 'actions';

export var AttorneyProfile = React.createClass({

  render() {

    return(

      <div className="sections">
        <br></br>
        <section id="profile" data-magellan-target="profile">
            <div>
            <div className="sectionHeader">About your Attorney</div>
                <br></br>
                <div className="row">
                    <div className="small-12 medium-12 large-12 columns">
                        <div className="callout blueBox">
                            <p>Eric Bacus graduated from The University of Texas Law School in 2013, and has focused exclusively on immigration law ever since.  He lives in the greater Houston area with his wife Angela and their two dogs. He is dedicated to his family and his clients.  He loves music, travelling, reading and cheering on the Houston Dynamo.</p>
                        </div>
                    </div>
                </div>
            {/*<div className="textCenter">Testimonials</div>
                <br></br>
                <div className="row">
                    <div className="small-6 medium-6 large-6 columns">
                        <Quote1 />
                    </div>
                    <div className="small-6 medium-6 large-6 columns">
                        <Quote1 />
                    </div>
                </div>
                <div className="row">
                    <div className="small-6 medium-6 large-6 columns">
                        <Quote1 />
                    </div>
                    <div className="small-6 medium-6 large-6 columns">
                        <Quote1 />
                    </div>
                </div>*/}
            </div>

        </section>
      </div>

    )
  }
})

export default Redux.connect()(AttorneyProfile);
