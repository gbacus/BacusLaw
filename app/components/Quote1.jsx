import React from 'react'
import * as Redux from 'react-redux';


export var Quote1 = React.createClass({



  render() {

    return(
      <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae bibendum velit fringilla vitae!
        <cite>Somebody famous</cite>
      </blockquote>
    )

  }
})

export default Redux.connect()(Quote1);