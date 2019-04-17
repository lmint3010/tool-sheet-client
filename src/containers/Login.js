import React, { Component } from 'react'
import LoginUI from '../components/Login'

import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// Dispatch
import { LoginDispatch } from '../actions/userAuthAction'

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  }

  // Lifecycle method
  componentWillMount() {
    const {
      reduxState: { auth },
      history,
    } = this.props
    if (auth.isAuthenticated) history.push('/dashboard')
  }

  // Life cycle method
  componentWillReceiveProps({ reduxState: { errors } }) {
    JSON.stringify(errors) !== '{}' && this.setState({ errors })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const { LoginDispatch, history } = this.props
    const { errors, ...userData } = this.state

    LoginDispatch({
      email: userData.email.trim(),
      password: userData.password
    }, history)
  }

  handleFormChange = ({ target }) => {
    this.setState(prevState => {
      if (JSON.stringify(prevState.errors) !== '{}')
        return { errors: {}, [target.name]: target.value }
      return { [target.name]: target.value }
    })
  }

  render() {
    const {
      handleFormChange,
      handleFormSubmit,
      state: { errors },
    } = this
    return (
      <LoginUI
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
        errors={errors}
      />
    )
  }
}

const mapStateToProps = ({ auth, errors }) => ({
  reduxState: { auth, errors },
})

const mapDispatchToProps = { LoginDispatch }

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)
