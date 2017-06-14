import React from 'react'
import * as Redux from 'react-redux';
import ReactModal from 'react-modal'
var ReactDOM = require('react-dom');
ReactModal.setAppElement('#app');

export var ExampleModal = React.createClass({

  handleOpenModal () {
    this.setState({ showModal: true });
  },

  handleCloseModal () {
    this.setState({ showModal: false });
  },

  render () {
    var {nav, modal, dispatch} = this.props;
    console.log(nav);
    if(modal.exampleModal0){
      return (
        <div>
          <ReactModal
             isOpen={true}
             contentLabel="onRequestClose Example"
             onRequestClose={this.handleCloseModal}
             className="Modal"
             overlayClassName="Overlay"
          >
            <p>Modal text!</p>
            <button onClick={this.handleCloseModal}>Close Modal</button>
          </ReactModal>
        </div>
      );
    }

  }
})

// const props = {};

// VIEW COMPILED

export default Redux.connect()(ExampleModal);

ReactDOM.render(<ExampleModal />, document.getElementById('app'))
