import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';


//import * as actions from 'actions';

export var PracticeAreas = React.createClass({

  render() {

    return(
      <div>
        <Navigation />
        <br></br>

        <div className="small-12 medium-6 large-3 columns cardPadding">
          <div className="card cardWidth">
            <div className="card-divider">
              Asylum
            </div>
            <img src="/assets/StockPhoto.jpg"/>
            <div className="card-section">
              <h4>This is a card.</h4>
              <p>It has an easy to override visual style, and is appropriately subdued.</p>
            </div>
          </div>
        </div>

        <div className="small-12 medium-6 large-3 columns">
          <div className="card cardWidth">
            <div className="card-divider">
              Imigration Bond
            </div>
            <img src="/assets/StockPhoto.jpg"/>
            <div className="card-section">
              <h4>This is a card.</h4>
              <p>It has an easy to override visual style, and is appropriately subdued.</p>
            </div>
          </div>
        </div>

        <div className="small-12 medium-6 large-3 columns">
          <div className="card cardWidth">
            <div className="card-divider">
              Removal & Deportation Defense
            </div>
            <img src="/assets/StockPhoto.jpg"/>
            <div className="card-section">
              <h4>This is a card.</h4>
              <p>It has an easy to override visual style, and is appropriately subdued.</p>
            </div>
          </div>
        </div>

        <div className="small-12 medium-6 large-3 columns">
          <div className="card cardWidth">
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

        <div className="small-12 medium-6 large-3 columns">
          <div className="card cardWidth">
            <div className="card-divider">
              Citizenship
            </div>
            <img src="/assets/StockPhoto.jpg"/>
            <div className="card-section">
              <h4>This is a card.</h4>
              <p>It has an easy to override visual style, and is appropriately subdued.</p>
            </div>
          </div>
        </div>

        <div className="small-12 medium-6 large-3 columns">
          <div className="card cardWidth">
            <div className="card-divider">
              Deferred Action
            </div>
            <img src="/assets/StockPhoto.jpg"/>
            <div className="card-section">
              <h4>This is a card.</h4>
              <p>It has an easy to override visual style, and is appropriately subdued.</p>
            </div>
          </div>
        </div>

        <div className="small-12 medium-6 large-3 columns">
          <div className="card cardWidth">
            <div className="card-divider">
              Visa
            </div>
            <img src="/assets/StockPhoto.jpg"/>
            <div className="card-section">
              <h4>This is a card.</h4>
              <p>It has an easy to override visual style, and is appropriately subdued.</p>
            </div>
          </div>
        </div>

        <div className="small-12 medium-6 large-3 columns">
          <div className="card cardWidth">
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
    )
  }
})

export default Redux.connect()(PracticeAreas);