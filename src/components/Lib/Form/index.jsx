import React from 'react'
import ReactDOM from 'react-dom'
import UnwrappedForm from './UnwrappedForm'
import Tooltip from 'components/Lib/Tooltip'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (data) => {
    let modifiedData = []
    for (let i = 0; i < this.props.children.length - 1; i++) {
      modifiedData.push(data.target[i].value)
    }
    data.preventDefault()
    this.props.onSubmit(modifiedData)
    if (this.props.resetOnSubmit) {
      ReactDOM.findDOMNode(this.unwrappedForm).reset()
    }
  };

  render() {
    return (
      <div>
        <Tooltip target={ this.unwrappedForm } message={ this.props.errorMessage } />
        <UnwrappedForm onSubmit={ this.handleSubmit } ref={ (ref) => this.unwrappedForm = ref }>
          { this.props.children }
        </UnwrappedForm>
      </div>
    )
  }
}
