import React from 'react'
import * as Redux from 'react-redux';


export var AccordianExample = React.createClass({



  render() {

    return(
      <div className = "accordionExample">
        <ul className="accordion" data-accordion data-allow-all-closed="true">
          <li className="accordion-item" data-accordion-item>
            <a className="accordion-title">Accordion 1</a>
            <div className="accordion-content" data-tab-content id="deeplink1">
              Panel 1. Lorem ipsum dolor
            </div>
          </li>
          <li className="accordion-item" data-accordion-item>
            <a className="accordion-title">Accordion 2</a>
            <div className="accordion-content" data-tab-content id="deeplink2">
              Panel 2. Lorem ipsum dolor
            </div>
          </li>
          <li className="accordion-item" data-accordion-item>
            <a className="accordion-title">Accordion 3</a>
            <div className="accordion-content" data-tab-content id="deeplink3">
              Panel 3. Lorem ipsum dolor
            </div>
          </li>
        </ul>
      </div>
    )

  }
})

export default Redux.connect()(AccordianExample);



