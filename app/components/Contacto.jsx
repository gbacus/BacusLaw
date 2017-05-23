import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';


//import * as actions from 'actions';

export var Contacto = React.createClass({

  render() {

    return(
      <div>
        <Navigation />
        <br></br>
        <div className="row">
          <div className="small-12 medium-12 large-12 columns callout textcenter">
            <h4>Email: eric@bacuslaw.com</h4>
          </div>
        </div>
        <div className="row">
          <div className="small-12 medium-12 large-12 columns callout textcenter">
            <h4>Cellular: (832) 910-7923</h4>
          </div>
        </div>
        <div className="row">
          <div className="small-12 medium-12 large-12 columns callout textcenter">
            <h4>Fax: (800) 823-3109</h4>
          </div>
        </div>
        <div className="row">
          <div className="small-12 medium-12 large-12 columns callout textcenter">
            <h4>Dirección: 11040 East Fwy, Houston, TX 77029</h4>
          </div>
        </div>
        <img className="imageResize" src='/assets/BacusLawOfficePic.png' alt='Bacus Law Office sPic' />
      </div>
    )
  }
})

export default Redux.connect()(Contacto);