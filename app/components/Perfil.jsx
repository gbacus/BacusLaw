import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import Footer from 'Footer';
import Letter from 'Letter';
import Quote1 from 'Quote1';

//import * as actions from 'actions';

export var Perfil = React.createClass({

  render() {

    return(

      <div className="sections">
        <br></br>
        <section id="profile" data-magellan-target="profile">
            <div>
            <div className="sectionHeader">Perfil de Abogado</div>
                <br></br>
                <div className="row">
                    <div className="small-12 medium-12 large-12 columns">
                        <div className="callout blueBox">
                            <p>Eric Bacus se graduó de la Facultad de Derechos de la Universidad de Texas en 2013 y se ha enfocado exclusivamente en la ley de inmigración desde entonces. Vive en el área metropolitana de Houston con su esposa Angela y sus dos perros. Se dedica a su familia y sus clientes. Le encanta la música, viajar, leer y es fan del Houston Dynamo.</p>
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

export default Redux.connect()(Perfil);
