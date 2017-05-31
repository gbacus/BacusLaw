import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import Footer from 'Footer';



//import * as actions from 'actions';

export var PracticeAreas = React.createClass({

  render() {

    return(

      <div className="sections">
        <section id="areas" data-magellan-target="areas">
          <div className="callout small">
            <br></br>
            <div className="row small-up-1 medium-up-4">


              <div className="column cardSection">
                <div className="card-divider">
                  Asylum
                </div>
                <img src="/assets/StockPhoto.jpg"/>
                <div className="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>

              <div className="column cardSection">
                <div className="card-divider">
                  Imigration Bond
                </div>
                <img src="/assets/StockPhoto.jpg"/>
                <div className="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>

              <div className="column cardSection">
                <div className="card-divider">
                  Deportation Defense
                </div>
                <img src="/assets/StockPhoto.jpg"/>
                <div className="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>

              <div className="column cardSection">
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
              <div className="column cardSection">
                <div className="card-divider">
                  Citizenship
                </div>
                <img src="/assets/StockPhoto.jpg"/>
                <div className="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>

              <div className="column cardSection">
                <div className="card-divider">
                  Deferred Action
                </div>
                <img src="/assets/StockPhoto.jpg"/>
                <div className="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>

              <div className="column cardSection">
                <div className="card-divider">
                  Visa
                </div>
                <img src="/assets/StockPhoto.jpg"/>
                <div className="card-section">
                  <h4>This is a card.</h4>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>

              <div className="column cardSection">
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

          </div>
        </section>
      </div>
    )
  }
})

export default Redux.connect()(PracticeAreas);