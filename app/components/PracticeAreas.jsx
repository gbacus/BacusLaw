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


              <div className="column cardSection" data-open="asylum">
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

              <div className="column cardSection" data-open="deportationDefense">
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

            <div className="row small-up-1 medium-up-4" data-open="citizenship">
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


          {/*MODALS*/}

          <div className="reveal" id="asylum" data-reveal>
            <h1>Asylum</h1>
            <p>If you are scared of being harmed or mistreated in your home country, you have the right to ask the United States government for protection.  You have this right even if you are in the country without authorization, or have a criminal history.  Bacus Law has extensive experience in handling asylum cases for people from all over the world.  If you are scared to return to your home country, please get in touch as soon as possible.  There are deadlines associated with asylum cases that may affect the type of relief for which you qualify. </p>
            <button className="close-button" data-close aria-label="Close modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="reveal" id="deportationDefense" data-reveal>
            <h1>Deportation Defense</h1>
            <p>If you have a case in Immigration Court, you have rights and you have obligations.  It is very important that you understand and exercise your rights, and that you understand and fulfill your obligations.  Every case is different, and your particular facts may make you eligible for various kinds of relief.  Bacus Law has extensive experience in preventing deportation as well as mitigating the negative effects of a deportation order. </p>
            <button className="close-button" data-close aria-label="Close modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

           <div className="reveal" id="citizenship" data-reveal>
            <h1>Citizenship</h1>
            <p>After someone has been a legal permanent resident for a period of time, often they can apply for US citizenship.  Becoming a citizen has many benefits, including the ability to vote and run for certain elected offices.  However, the process is complex, and in some situations applying for citizenship can inadvertently lead to deportation - for example, if the applicant has a particular criminal history.  Bacus Law can help you understand the process of applying for citizenship, provide advice on how to apply, and represent you before the government to ensure your citizenship application goes as smoothly as possible. </p>
            <button className="close-button" data-close aria-label="Close modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>


          </div>
        </section>
      </div>
    )
  }
})

export default Redux.connect()(PracticeAreas);