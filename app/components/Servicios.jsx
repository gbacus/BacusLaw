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
          <div>
          <div className="sectionHeader">Servicios</div>
            <br></br>
            <div className="row small-up-1 medium-up-4">


              <div className="column cardBox" data-open="asilo">
                <div className="card-divider cardTop">
                  Asilo
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>

              <div className="column cardBox" data-open="clientesdetenidos">
                <div className="card-divider cardTop">
                  Clientes Detenidos
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>

              <div className="column cardBox" data-open="defensadedeportacion">
                <div className="card-divider cardTop">
                  Defensa de Deportación
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>

              <div className="column cardBox" data-open="casosbasadosenlafamilia">
                <div className="card-divider cardTop">
                  Casos Basados en la Familia
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
              <div className="column cardBox" data-open="ciudadania">
                <div className="card-divider cardTop">
                  Ciudadanía
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>

              <div className="column cardBox" data-open="reabriruncaso">
                <div className="card-divider cardTop">
                  Reabrir un Caso
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>

              <div className="column cardBox" data-open="victimas">
                <div className="card-divider cardTop" >
                  Las Victimas de Crimen
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>

              <div className="column cardBox" data-open="apelacion">
                <div className="card-divider cardTop" >
                  La Apelación de un Caso
                </div>
                {/*<img className="cardMiddle" src="/assets/StockPhoto.jpg"/>
                <div className="card-section cardBottom">
                  <div>This is a card.</div>
                  <p>It has an easy to override visual style, and is appropriately subdued.</p>
                </div>*/}
              </div>
            </div>


          {/*MODALS*/}

            <div className="reveal" id="asilo" data-reveal>
              <div className="bold">Asilo</div>
              <br></br>
              <p>Si usted tiene miedo de regresar a su país por causa de persecución o maltratamiento, tiene el derecho pedir protección al gobierno de los Estados Unidos.  Esto es cierto también si usted está en los Estados Unidos sin autorización o si usted tiene história criminal.  Bacus Law tiene mucha experiencia en los casos del asilo para personas de todo el mundo.  Si esto es su caso, por favor contácteme lo más pronto posible, ya que puede perder opciones si espera demasiado tiempo.</p>
              {/*<button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>*/}
            </div>

            <div className="reveal" id="clientesdetenidos" data-reveal>
              <div className="bold">Clientes Detenidos</div>
              <br></br>
              <p>Tener un ser querido detenido por el “Immigration and Customs Enforcement” (ICE) es traumático y confuso para toda la familia. Puede ser difícil obtener información básica sobre dónde está, qué derechos tiene y cómo puedan ayudarle. También puede ser difícil determinar cuánto tiempo tiene que ser detenidos o si tiene derecho a pelear su caso.</p>

              <p>La Fianza y el Parole</p>

              <p>Si un ser querido está detenido por "Immigration and Customs Enforcement" (ICE), puede ser elegible para salir de detención antes de que su caso termine. Normalmente se hace esto por pedir una fianza o en ciertos casos, “parole” (libertad condicional). Si a un detenido se le ofrece una fianza, se le permite salir de la detención después de que alguien le diga pagado al gobierno para asegurarse que el individuo asistirá a todas las audiencias futuras sobre su caso. Si a un detenido se le ofrece parole, no se necesita dinero.</p>

              <p>Pedir una fianza o parole puede ser complicado y el gobierno generalmente requiere pruebas para demostrar que el detenido no es un peligro a la sociedad o que no va asistir a futuras audiencias. Si un detenido es elegible para una fianza o parole, Bacus Law puede ayudar a maximizar las posibilidades de que se le ofrezcan este alivio de la manera más rápida y barata posible.</p>

              <p>Bacus Law tiene mucha experiencia en dar consejos y representación legal de personas detenidas por ICE.</p>

              <p className="alert">Si un ser querido es detenido por ICE, por favor hábleme al <a className="boldRed" href="tel:+1-832-910-7923">(832) 910-7923</a> tan pronto posible para una consulta gratis sobre lo que se puede hacer para ayudarle. También puede localizarle usando el <a className="boldRed" href="https://locator.ice.gov/odls/homePage.do" target="_blank">Sistema de Localización de Detenidos.</a></p>
              {/*<button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>*/}
            </div>

            <div className="reveal" id="defensadedeportacion" data-reveal>
              <div className="bold">Defensa de Deportación</div>
              <br></br>
              <p>Si usted tiene un caso en la Corte de Inmigración, usted tiene derechos y obligaciones. Es muy importante que entienda y ejerce sus derechos, y cumpla sus obligaciones. Cada caso es diferente y sus hechos particulares pueden hacerle elegible para varios tipos de alivio. Bacus Law tiene mucha experiencia en la prevención de la deportación, así como en la mitigación de los efectos negativos de una orden de deportación. </p>
              {/*<button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>*/}
            </div>

            <div className="reveal" id="casosbasadosenlafamilia" data-reveal>
              <div className="bold">Casos Basados en la Familia</div>
              <br></br>
              <p>La ley de inmigración puede permitir que una persona viva en los Estados Unidos en base a su relación con un ciudadano o con un residente permanente legal (alguien que tiene una “green card,” o tarjeta verde). A veces una persona que entró al país sin autorización puede convertirse en residente permanente a través de un miembro de la familia. Si usted está interesado en convertirse en un residente permanente legal y tiene un familiar que vive legalmente en los Estados Unidos, Bacus Law puede darle consejo y representación a lo largo de este proceso complejo.</p>
              {/*<button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>*/}
            </div>

             <div className="reveal" id="ciudadania" data-reveal>
              <div className="bold">Ciudadanía</div>
              <br></br>
              <p>Después de alguien ser un residente permanente legal por un período de tiempo, a menudo pueden solicitar la ciudadanía de los Estados Unidos. Convertirse en un ciudadano tiene muchos beneficios, incluyendo la capacidad de votar. Sin embargo, el proceso es complejo y en algunas situaciones la solicitud de la ciudadanía puede causar inadvertidamente a la deportación - por ejemplo, si el solicitante tiene una história criminal particular. Bacus Law le puede ayudar entender el proceso de la solicitud de ciudadanía, dar consejos sobre cómo solicitarlo y representarle ante al gobierno para asegurar que su solicitud de ciudadanía sea lo más fácil posible. </p>
              {/*<button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>*/}
            </div>

            <div className="reveal" id="reabriruncaso" data-reveal>
              <div className="bold">Reabrir un Caso</div>
              <br></br>
              <p>Aún después de un caso ser cerrado, puede ser posible reabrirlo. Por ejemplo, usted puede haber tenido una excusa fuerte para no presentarse a una audiencia o tal vez sus circunstancias familiares hayan cambiado o las cosas en su país empeorado. Bacus Law puede analizar su situación específica y si es aconsejable, le ayudará a solicitar a la corte una nueva audiencia.</p>
              {/*<button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>*/}
            </div>

            <div className="reveal" id="victimas" data-reveal>
              <div className="bold">Las Victimas de Crimen</div>
              <br></br>
              <p>Si usted ha sido víctima de un crimen en los Estados Unidos, puede ser elegible para ciertas visas específicamente para las personas en su situación. Esto es especialmente cierto si usted cooperó con la policía. Póngase en contacto con Bacus Law para hablar de su situación.</p>
              {/*<button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>*/}
            </div>

            <div className="reveal" id="apelacion" data-reveal>
              <div className="bold">La Apelación de un Caso</div>
              <br></br>
              <p>Si usted pierde su caso en la Corte de Inmigración, todavía tiene la opción de apelar. La Junta de Apelaciones de Inmigración (BIA) revisa las decisiones de los jueces de inmigración, y en ocasiones corrige o revierte una decisión tomada por un juez. Debido a los plazos estrictos involucrados en apelar a la BIA, por favor comuníquese con Bacus Law tan pronto como sea posible si está interesado en apelar su caso.</p>
              {/*<button className="close-button" data-close aria-label="Close modal" type="button">
                <span aria-hidden="true">&times;</span>
              </button>*/}
            </div>
            <br></br>
          </div>
        </section>
        <br></br>
      </div>
    )
  }
})

export default Redux.connect()(Servicios);