import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';

class WelcomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ modal: true });
    }, 100);
  }

  closeModal() {
    this.setState({ modal: false });
  }

  render() {
    return (
      <CSSTransition
        in={this.state.modal}
        timeout={300}
        classNames="modal-transition"
        unmountOnExit
      >
        <div className="modalContainer">
          <div className="modal">
            <div className="title">
              <h1>Lorem Ipsum!</h1>
              <span onClick={this.closeModal} className="modalClose">
                x
              </span>
            </div>
            <hr />
            <div>
              <p className="discription">
                Hello my dear friend! Today we greeting you with big love with
                us. We think that you can do yourself job together us. And now
                we are going to far travel a way. Just follow us and don't
                look back dude!
              </p>
            </div>
            <hr />
            <div className="btnDiv">
              <button onClick={this.closeModal} className="buttonClose">
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default WelcomModal;
