import React from 'react'
import * as formActions from 'actions/form'
import formSelector from 'selectors/form'
import InputForm from 'components/InputForm'
import reduxify from 'toolbox/reduxify'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.actions.initializeValues(['','',''])
  }

  componentWillUnmount() {
    this.props.actions.clearValues()
    this.props.actions.setErrorMessage(null)
  }

  handleChange () {
    return (event, index) => {
      this.props.actions.updateValue(event.target.value, index)
    }
  }

  render() {
    return (
      <InputForm
        onChange={ this.handleChange() }
        errorMessage={ this.props.errorMessage }
        placeholders={ ['Email','Password','Confirm Password'] }
        types={ ['email','password','password'] }
        values={ this.props.values }
      />
    )
  }
}

export default reduxify({
  selector: formSelector,
  actions: formActions,
  container: SignupForm
})
