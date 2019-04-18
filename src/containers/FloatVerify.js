import React, { Component } from 'react'
import FloatVerifyUI from '../components/Layout/FloatVerify'

import { connect } from 'react-redux'
import { googleVerifyDispatch } from '../actions/googleVerifyAction'
import { waitingVerifyDispatch } from '../actions/floatVerify.action'

import isEmpty from '../validation/isEmpty'

class FloatVerify extends Component {
  state = { code: '', errors: '' }

  componentWillReceiveProps({ reduxState: { errors, google_verify } }) {
    if (!isEmpty(errors)) this.setState({ errors })
    if (google_verify.verified) console.log(google_verify)
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { googleVerifyDispatch, waitingVerifyDispatch, reduxState } = this.props
    if (this.state.code.length > 6) {
      waitingVerifyDispatch(true)
      const requestBody = {
        code: this.state.code,
        userId: reduxState.user._id,
      }
      await googleVerifyDispatch(requestBody)
      return
    }
    this.setState({ errors: 'Please enter valid token' })
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleGetVerifyCode = () => {
    const {
      reduxState: {
        google_verify: { url },
      },
    } = this.props
    if (url) window.open(url, 'popup', 'width=600, height=500, top=50, left=50')
  }

  render() {
    const {
      props: { display },
      state: { errors },
      handleGetVerifyCode,
      handleSubmit,
      handleChange,
    } = this
    return (
      <FloatVerifyUI
        onChange={handleChange}
        onSubmit={handleSubmit}
        getVerifyCode={handleGetVerifyCode}
        errors={errors}
        display={display}
      />
    )
  }
}

const mapStateToProps = ({ google_verify, auth: { user }, errors }) => ({
  reduxState: { google_verify, user, errors },
})

const mapDispatchToProps = { googleVerifyDispatch, waitingVerifyDispatch }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FloatVerify)
