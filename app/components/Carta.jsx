import React from 'react'
import * as Redux from 'react-redux';


export var Carta = React.createClass({



  render() {

    return(
      <div className="callout secondary letter">
        <p>Gracias por su interés en Bacus Law.  Yo tengo la pasión por ayudar al quien tenga que interactuar con el sistema de inmigración de los Estados Unidos.  Yo le daría consejos legales y representación con excelencia y compasión.</p>

        <p>Si usted escoge trabajar conmigo, yo hiciera todo lo posible para asegurar que usted, el cliente,</p>

        <ol>
          <li>Entienda su situación y sus opciones, basado en consejos acertados y puntuales. </li>
          <li>Tenga fijos los objetivos de la representación, los cuales ejecutaría con mayor estrategia para cumplirlos.</li>
          <li>Al fin de la representación, me recomienda sin reservación a sus amigos, familia y queridos.</li>
        </ol>

        <p>Como cualquier otro abogado, yo no puedo garantizar un resultado particular, pero sí puedo garantizar mi fuerte dedicación a su caso.  Espero con alto interés trabajar con usted en el futuro cercano. Si tiene preguntas, por favor ponerse en contacto.</p>

        <p>
          Sinceramente, <br />
          Eric Bacus <br />
        </p>
      </div>
    )

  }
})

export default Redux.connect()(Carta);