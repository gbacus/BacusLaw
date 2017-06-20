import React from 'react'
import * as Redux from 'react-redux';


export var Letter = React.createClass({



  render() {

    return(
      <div className="callout secondary letter">
        <p>Thank you for your interest in Bacus Law.  I am the owner and sole attorney.  I am passionate about helping people who need to interact with the US immigration system by providing legal advice and representation with excellence and compassion.</p>

        <p>If you choose to work with me, I will do my best to ensure that you, the client, experience the following:</p>

        <ol>
          <li>You understand your situation and your options, based on timely and accurate legal advice.</li>
          <li>You set the goals of the legal representation, and I carefully execute the best strategy for meeting those goals.</li>
          <li>In the end, you would unreservedly recommend Bacus Law to your friends, family and loved ones.</li>
        </ol>

        <p>As with any attorney, I cannot guarantee you a particular result.  But I can guarantee you my zealous dedication to your case.  I look forward to working with you, and please do get in touch if I can answer any questions.</p>

        <p>
          Sincerely, <br />
          Eric Bacus <br />
        </p>
      </div>
    )

  }
})

export default Redux.connect()(Letter);