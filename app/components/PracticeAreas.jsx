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
            <div className="sectionHeader">Practices Areas</div>
            <br></br>
            <div className="row small-up-1 medium-up-4">


              <div className="column cardBox" data-open="asylum">
                <div className="card-divider cardTop">
                  Asylum
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>

              <div className="column cardBox" data-open="detainedClients">
                <div className="card-divider cardTop">
                  Detained Clients
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>

              <div className="column cardBox" data-open="deportationDefense">
                <div className="card-divider cardTop">
                  Deportation Defense
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>

              <div className="column cardBox" data-open="familybasedcases">
                <div className="card-divider cardTop">
                  Family-Based Cases
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>
            </div>

            <br></br>

            <div className="row small-up-1 medium-up-4">
              <div className="column cardBox" data-open="citizenship">
                <div className="card-divider cardTop">
                  Citizenship
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>

              <div className="column cardBox" data-open="reopeningacase">
                <div className="card-divider cardTop">
                  Reopening a Case
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>

              <div className="column cardBox" data-open="victimsofcrime">
                <div className="card-divider cardTop" >
                  Victims of Crime
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>

              <div className="column cardBox" data-open="appealingacase">
                <div className="card-divider cardTop" >
                  Appealing a Case
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>
            </div>


          {/*MODALS*/}

            <div className="reveal" id="asylum" data-reveal>
              <div className="bold">Asylum</div>
              <br></br>
              <p>If you are scared of being harmed or mistreated in your home country, you have the right to ask the United States government for protection.  You have this right even if you are in the country without authorization, or have a criminal history.  Bacus Law has extensive experience in handling asylum cases for people from all over the world.  If you are scared to return to your home country, please get in touch as soon as possible.  There are deadlines associated with asylum cases that may affect the type of relief for which you qualify. </p>
              <button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="reveal" id="detainedClients" data-reveal>
              <div className="bold">Detained Clients</div>
              <br></br>
              <p>Having a loved one detained by Immigration and Customs Enforcement (ICE) is traumatic and confusing for the entire family.  It may be difficult to get even basic information about where they are, what rights they have, and how you can help them.  It can also be difficult to determine how long they may have to be detained, and if they are entitled to apply for relief.</p>

              <p>Bond and parole.</p>

              <p>  If a loved one is detained by Immigration and Customs Enforcement (ICE), they may be eligible to be released before their case has been resolved.  This is generally done by asking for a bond, or, in certain cases, parole.   If a detainee is offered bond, he or she is allowed to leave detention after someone gives money to the government to ensure they will attend future hearings on their case.  If a detainee is offered parole, no money is needed.</p>

              <p>Requesting bond and parole can be complicated, and the government usually requires evidence to demonstrate the detainee is not a danger to society or at risk of not attending future hearings.  If a detainee is eligible for bond or parole, Bacus Law can help maximize the chances he or she is offered this relief as quickly and cheaply as possible.</p>

              <p>Bacus Law has extensive experience in providing advice and legal representation for people detained by ICE.</p>

              <p className="alert">If a loved one is detained by ICE, please call <a className="boldRed" href="tel:+1-832-910-7923">(832) 910-7923</a> as soon as possible for a free consultation on what can be done to help them.  You may also be able to locate them using this <a className="boldRed" href="https://locator.ice.gov/odls/homePage.do" target="_blank">Online Detainee Locator System.</a></p>
              <button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="reveal" id="deportationDefense" data-reveal>
              <div className="bold">Deportation Defense</div>
              <br></br>
              <p>If you have a case in Immigration Court, you have rights and you have obligations.  It is very important that you understand and exercise your rights, and that you understand and fulfill your obligations.  Every case is different, and your particular facts may make you eligible for various kinds of relief.  Bacus Law has extensive experience in preventing deportation as well as mitigating the negative effects of a deportation order. </p>
              <button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="reveal" id="familybasedcases" data-reveal>
              <div className="bold">Family-Based Cases</div>
              <br></br>
              <p>US immigration law may allow a person to live in the United States based on their relationship to a US citizen or legal permanent resident (someone who has a green card).  Sometimes even a person who entered the country without authorization can become a permanent resident through a family member.  If you are interested in becoming a legal permanent resident and have a family who lives in the United States legally, Bacus Law can provide you with advice and representation throughout this complex process.</p>
              <button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

             <div className="reveal" id="citizenship" data-reveal>
              <div className="bold">Citizenship</div>
              <br></br>
              <p>After someone has been a legal permanent resident for a period of time, often they can apply for US citizenship.  Becoming a citizen has many benefits, including the ability to vote and run for certain elected offices.  However, the process is complex, and in some situations applying for citizenship can inadvertently lead to deportation - for example, if the applicant has a particular criminal history.  Bacus Law can help you understand the process of applying for citizenship, provide advice on how to apply, and represent you before the government to ensure your citizenship application goes as smoothly as possible. </p>
              <button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="reveal" id="reopeningacase" data-reveal>
              <div className="bold">Reopening a Case</div>
              <br></br>
              <p>Even after a case is closed, it may be possible to reopen it.  For example, you may have had a good excuse for not showing up for a hearing.  Or maybe your family circumstances have changed, or things in your country have gotten worse.  Bacus Law can analyze your specific situation and, if advisable, help you ask the court for a new hearing.</p>
              <button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="reveal" id="victimsofcrime" data-reveal>
              <div className="bold">Victims of Crime</div>
              <br></br>
              <p>If you have been the victim of a crime in the United States, you may be eligible for certain visas specifically for people in your situation.  This is especially true if you cooperated with the police.  Please contact Bacus Law to discuss your specific situation.</p>
              <button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="reveal" id="appealingacase" data-reveal>
              <div className="bold">Appealing a Case</div>
              <br></br>
              <p>If you lose your case in Immigration Court, you still have the option to appeal.  The Board of Immigration Appeals (BIA) reviews the decisions of Immigration Judges, and on occasion corrects or reverses a decision made by a judge.  Because of the tight deadlines involved in appealing to the BIA, please contact Bacus Law as soon as possible if you are interested in appealing your case. </p>
              <button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <br></br>
          </div>
        </section>
      </div>
    )
  }
})

export default Redux.connect()(PracticeAreas);