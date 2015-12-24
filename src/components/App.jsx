import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalData: {}
    };
  }

  closeModal() {
    this.setState({ showModal: false });
  }
  openModal(data) {
    this.setState({ modalData: data, showModal: true });
  }

  render() {
    return (
      <div>
        { React.cloneElement(this.props.children, { myProp: "my prop!" }) }
      </div>
    );
  }
}

