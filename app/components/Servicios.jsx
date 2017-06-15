import React from 'react'
import * as Redux from 'react-redux';
import Navigation from 'Navigation';
import Footer from 'Footer';



//import * as actions from 'actions';

export var Servicios = React.createClass({

  render() {

    return(

      <div className="sections">
        <section id="areas" data-magellan-target="areas">
          <div className="callout small">
            <br></br>
            <div className="row small-up-1 medium-up-4">


              <div className="column cardBox" data-open="asylum">
                <div className="card-divider cardTop">
                  Asylum
                </div>
                <img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>

              {/*<div className="column cardBox">
                <div className="card-divider">
                  Imigration Bond
                </div>
                <img src="/assets/StockPhoto.jpg"/>
                <div className="card-section">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>*/}

              <div className="column cardBox" data-open="detainedClients">
                <div className="card-divider cardTop">
                  Detained Clients
                </div>
                <img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>

              <div className="column cardBox" data-open="deportationDefense">
                <div className="card-divider cardTop">
                  Deportation Defense
                </div>
                <img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>

              <div className="column cardBox" data-open="adjustmentofstatus">
                <div className="card-divider cardTop">
                  Adjustment of Status
                </div>
                <img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>

            <br></br>

            <div className="row small-up-1 medium-up-4">
              <div className="column cardBox" data-open="citizenship">
                <div className="card-divider cardTop">
                  Citizenship
                </div>
                <img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>

              <div className="column cardBox" data-open="deferredAction">
                <div className="card-divider cardTop">
                  Deferred Action
                </div>
                <img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>

              <div className="column cardBox" data-open="visa">
                <div className="card-divider cardTop" >
                  Visa
                </div>
                <img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>

              <div className="column cardBox" data-open="immigrationappeals">
                <div className="card-divider cardTop" >
                  Immigration Appeals
                </div>
                <img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>
              </div>
            </div>


          {/*MODALS*/}

          <div className="reveal" id="asylum" data-reveal>
            <div>Asylum</div>
            <p>If you are scared of being harmed or mistreated in your home country, you have the right to ask the United States government for protection.  You have this right even if you are in the country without authorization, or have a criminal history.  Bacus Law has extensive experience in handling asylum cases for people from all over the world.  If you are scared to return to your home country, please get in touch as soon as possible.  There are deadlines associated with asylum cases that may affect the type of relief for which you qualify. </p>
            <button className="close-button" data-close aria-label="Close modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="reveal" id="deportationDefense" data-reveal>
            <div>Deportation Defense</div>
            <p>If you have a case in Immigration Court, you have rights and you have obligations.  It is very important that you understand and exercise your rights, and that you understand and fulfill your obligations.  Every case is different, and your particular facts may make you eligible for various kinds of relief.  Bacus Law has extensive experience in preventing deportation as well as mitigating the negative effects of a deportation order. </p>
            <button className="close-button" data-close aria-label="Close modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="reveal" id="deferredAction" data-reveal>
            <div>Deferred Action</div>
            <p>Deferred Action Modal</p>
            <button className="close-button" data-close aria-label="Close modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="reveal" id="adjustmentofstatus" data-reveal>
            <div>Adjustment of Status</div>
            <p>Adjustment of Status Modal</p>
            <button className="close-button" data-close aria-label="Close modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="reveal" id="immigrationappeals" data-reveal>
            <div>Immigration Appeals</div>
            <p>Immigration Appeals Modal</p>
            <button className="close-button" data-close aria-label="Close modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="reveal" id="visa" data-reveal>
            <div>Visa</div>
            <p>Visa Modal</p>
            <button className="close-button" data-close aria-label="Close modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

           <div className="reveal" id="citizenship" data-reveal>
            <div>Citizenship</div>
            <p>After someone has been a legal permanent resident for a period of time, often they can apply for US citizenship.  Becoming a citizen has many benefits, including the ability to vote and run for certain elected offices.  However, the process is complex, and in some situations applying for citizenship can inadvertently lead to deportation - for example, if the applicant has a particular criminal history.  Bacus Law can help you understand the process of applying for citizenship, provide advice on how to apply, and represent you before the government to ensure your citizenship application goes as smoothly as possible. </p>
            <button className="close-button" data-close aria-label="Close modal" type="button">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="reveal" id="detainedClients" data-reveal>
            <div>Detained Clients</div>
            <p>Having a loved one detained by Immigration and Customs Enforcement (ICE) is traumatic and confusing for the entire family.  It may be difficult to get even basic information about where they are, what rights they have, and how you can help them.  It can also be difficult to determine how long they may have to be detained, and if they are entitled to apply for relief.</p>

            <p>Bond and parole.</p>

            <p>  If a loved one is detained by Immigration and Customs Enforcement (ICE), they may be eligible to be released before their case has been resolved.  This is generally done by asking for a bond, or, in certain cases, parole.   If a detainee is offered bond, he or she is allowed to leave detention after someone gives money to the government to ensure they will attend future hearings on their case.  If a detainee is offered parole, no money is needed.</p>

            <p>Requesting bond and parole can be complicated, and the government usually requires evidence to demonstrate the detainee is not a danger to society or at risk of not attending future hearings.  If a detainee is eligible for bond or parole, Bacus Law can help maximize the chances he or she is offered this relief as quickly and cheaply as possible.</p>

            <p>Bacus Law has extensive experience in providing advice and legal representation for people detained by ICE.</p>

            <p className="alert">If a loved one is detained by ICE, please call (832) 910-7923 as soon as possible for a free consultation on what can be done to help them.  You may also be able to locate them using this <a className="bold" href="https://locator.ice.gov/odls/homePage.do" target="_blank">Online Detainee Locator System.</a></p>
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

export default Redux.connect()(Servicios);