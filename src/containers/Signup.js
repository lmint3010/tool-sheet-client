import React, { Component } from 'react'
import SignupUI from '../components/Signup'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// Dispatch Imports
import { RegisterDispatch } from '../actions/userAuthAction'
import isEmpty from '../validation/isEmpty'

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  }

  // TODO: Check - Using GetDerivedStateFromProps in place of the other two DEPRECATED LIfeCycleMethods
  static getDerivedStateFromProps(props, state) {
    const { reduxState: { auth, errors }, history } =  props;
    if (auth.isAuthenticated) {
      history.push('/dashboard');
      return null;
    }

    if (!isEmpty(errors)) {
      return { errors };
    }

    return null;
  }

  // // Lifecycle method
  // componentWillMount() {
  //   const { reduxState: { auth }, history } = this.props
  //   if(auth.isAuthenticated) history.push('/dashboard')
  // }
  //
  // // Lifecycle method
  // componentWillReceiveProps({ reduxState: { errors }}) {
  //   JSON.stringify(errors) !== '{}' && this.setState({ errors })
  // }

  handleFormChange = ({ target }) => {
    this.setState((prevState) => {
      if(JSON.stringify(prevState.errors) !== '{}')
        return { errors: {}, [target.name]: target.value }
      return { [target.name]: target.value }
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    // Extract dispatch
    const { RegisterDispatch, history } = this.props
    const { errors, ...newUser } = this.state

    RegisterDispatch(newUser, history)
  }

  render() {
    const {
      handleFormChange,
      handleFormSubmit,
      state: { errors }
    } = this

    return <SignupUI
      onChange={handleFormChange}
      onSubmit={handleFormSubmit}
      errors={errors}
    />
  }
}

const mapStateToProps = ({ auth, errors }) => ({
  reduxState: { auth, errors }
})

const mapDispatchToProps = { RegisterDispatch }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))
