import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import Footer from 'Footer';


//import * as actions from 'actions';

export var Servicios = React.createClass({

  render() {

        return(
        <div>
        <Navigation />
        <br></br>

        <div className="callout small">
          <br></br>
          <div className="row small-up-1 medium-up-4">
            <div data-open="exampleModal1" className="column">
              <div className="card-divider">
                Asylum
              </div>
              <img src="/assets/StockPhoto.jpg"/>
              <div className="card-section">
                <h4>This is a card.</h4>
                <p>It has an easy to override visual style, and is appropriately subdued.</p>
              </div>
            </div>

            <div className="column">
              <div className="card-divider">
                Imigration Bond
              </div>
              <img src="/assets/StockPhoto.jpg"/>
              <div className="card-section">
                <h4>This is a card.</h4>
                <p>It has an easy to override visual style, and is appropriately subdued.</p>
              </div>
            </div>

            <div className="column">
              <div className="card-divider">
                Deportation Defense
              </div>
              <img src="/assets/StockPhoto.jpg"/>
              <div className="card-section">
                <h4>This is a card.</h4>
                <p>It has an easy to override visual style, and is appropriately subdued.</p>
              </div>
            </div>

            <div className="column">
              <div className="card-divider">
                Adjustment of Status
              </div>
              <img src="/assets/StockPhoto.jpg"/>
              <div className="card-section">
                <h4>This is a card.</h4>
                <p>It has an easy to override visual style, and is appropriately subdued.</p>
              </div>
            </div>
          </div>

          <div className="row small-up-1 medium-up-4">
            <div className="column">
              <div className="card-divider">
                Citizenship
              </div>
              <img src="/assets/StockPhoto.jpg"/>
              <div className="card-section">
                <h4>This is a card.</h4>
                <p>It has an easy to override visual style, and is appropriately subdued.</p>
              </div>
            </div>

            <div className="column">
              <div className="card-divider">
                Deferred Action
              </div>
              <img src="/assets/StockPhoto.jpg"/>
              <div className="card-section">
                <h4>This is a card.</h4>
                <p>It has an easy to override visual style, and is appropriately subdued.</p>
              </div>
            </div>

            <div className="column">
              <div className="card-divider">
                Visa
              </div>
              <img src="/assets/StockPhoto.jpg"/>
              <div className="card-section">
                <h4>This is a card.</h4>
                <p>It has an easy to override visual style, and is appropriately subdued.</p>
              </div>
            </div>

            <div className="column">
              <div className="card-divider">
                Immigration Appeals
              </div>
              <img src="/assets/StockPhoto.jpg"/>
              <div className="card-section">
                <h4>This is a card.</h4>
                <p>It has an easy to override visual style, and is appropriately subdued.</p>
              </div>
            </div>
          </div>

          {/*<div className="reveal" id="exampleModal1" data-reveal>
            <h1>Some More Details Here</h1>
            <p className="lead">Details about this service.</p>
            <p>I'm a cool paragraph that lives inside of an even cooler modal.</p>
            <button className="close-button" data-close aria-label="Close modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>*/}

        </div>
        <Footer />
      </div>
    )
  }
})

export default Redux.connect()(Servicios);