import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import Footer from 'Footer';



//import * as actions from 'actions';

export var Clientes = React.createClass({

  render() {

    return(
        <div>
            <Navigation />
            <br></br>
            <div className="row">
              <div className="callout alert">
                <h5>Si usted está tratando de localizar a una persona que puede haber sido detenido por el I.C.E.</h5>
                <a href="https://locator.ice.gov/odls/homePage.do" target="_blank">Por favor, haga clic aquí para obtener más información de contacto</a>
              </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Footer />
        </div>
    )
  }
})

export default Redux.connect()(Clientes);