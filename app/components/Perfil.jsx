import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';


//import * as actions from 'actions';

export var Perfil = React.createClass({

  render() {

    return(
      <div>
        <Navigation />
        <br></br>

        <div className="row">
          <div className="small-12 medium-12 large-12 columns textCenter">
            <h1>Bienvenido a Bacus Law</h1>
            <h4>Eric Bacus, Abogado de Inmigracíon</h4>
            <h6 className="ital">Se Habla Español</h6>
          </div>
        </div>
        <div className="row">
          <div className="small-12 medium-12 large-12 columns">
            <img className="ericResize" src="/assets/eric.jpg" alt="Bacus Law Logo"/>
          </div>
        </div>
        <div className="row">
          <div className="small-12 medium-12 large-12 columns textCenter">
            <h5>Llame hoy por una consulta gratuita</h5>
          </div>
        </div>

      </div>
    )
  }
})

export default Redux.connect()(Perfil);