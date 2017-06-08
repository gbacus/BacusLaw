import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import Footer from 'Footer';

export var Perfil = React.createClass({

  render() {
    return(

      <div className="sections">
        <section id="profile" data-magellan-target="profile">
            <div className="row callout small">
              <div className="small-12 medium-12 large-12 columns">
                <div className="callout warning">
                  <p>Eric Bacus graduated from The University of Texas Law School in 2013, and has focused exclusively on immigration law ever since.  He lives in the greater Houston area with his wife Angela and their two dogs. He is dedicated to his family and his clients.  He loves music, travelling, reading and cheering on the Houston Dynamo.</p>
                </div>
              </div>
            </div>
        </section>
      </div>

    )

  }
})

export default Redux.connect()(Perfil);
