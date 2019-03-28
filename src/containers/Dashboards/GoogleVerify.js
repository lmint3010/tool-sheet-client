import React, { Component } from 'react'

import GoogleVerifyUI from '../../components/Layout/DashboardLayout/GoogleVerify'

// Dispatch
import { googleVerifyDispatch } from '../../actions/googleVerifyAction'
import { connect } from 'react-redux';

import isEmpty from '../../validation/isEmpty'

class GoogleVerify extends Component {
  state = {
    code: '',
    errors: ''
  }

  componentWillMount() {
    const { reduxState: { google_verify }, history } = this.props
    if(!google_verify.url) history.push('/')
  }

  componentWillReceiveProps({ reduxState: { errors, google_verify }}) {
    if(!isEmpty(errors)) {
      this.setState({ errors })
    }
    if(google_verify.verified)
      window.location.href = '/'
  }

  handleFormChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const { googleVerifyDispatch, reduxState } = this.props
    if(this.state.code.length > 6) {
      const requestBody = {
        code: this.state.code,
        userId: reduxState.user._id
      }
      googleVerifyDispatch(requestBody)
      return
    }
    this.setState({ errors: 'Please enter valid token'})
  }

  handleGetVerifyCode = () => {
    const { reduxState: { google_verify: { url } }} = this.props
    if(url)
      window.open(url, 'popup', 'width=600, height=500, top=50, left=50')
  }

  render() {
    const {
      handleFormChange,
      handleFormSubmit,
      handleGetVerifyCode,
      state: { errors }
    } = this

    return <GoogleVerifyUI
      errors={errors}
      getCode={handleGetVerifyCode}
      onChange={handleFormChange}
      onSubmit={handleFormSubmit}
    />
  }
}

const mapStateToProps = ({ google_verify, auth: { user }, errors }) => ({
  reduxState: { google_verify, user, errors }
})

const mapDispatchToProps = { googleVerifyDispatch }

export default connect(mapStateToProps, mapDispatchToProps)(GoogleVerify)
