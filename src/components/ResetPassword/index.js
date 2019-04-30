import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

// UI Component
import { Input } from '../../themes/styled_comp/InputGroup'
import Form from '../../themes/styled_comp/Form'

import { StyledLink, Notification } from './styled'
import { resetPasswordDispatch } from '../../actions/resetPassword'

const ResetPassword = ({ reduxState, resetPasswordDispatch }) => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(null)
  const [alert, setAlert] = useState(null)

  useEffect(() => {
    if (typeof reduxState.errors === 'string') {
      setError(reduxState.errors)
    } else {
      setError(null)
    }
    if (reduxState.resetPasswordSend.send) {
      setAlert('Please check your email inbox')
    } else if (reduxState.resetPasswordSend.waiting) {
      setAlert('Please wait...')
    } else {
      setAlert(null)
    }
  })

  const handleFormSubmit = event => {
    event.preventDefault()
    resetPasswordDispatch({ email: inputValue })
  }

  const handleFormChange = ({ target: { value } }) => {
    setInputValue(value)
  }

  return (
    <Form
      title="Reset Password"
      onSubmit={handleFormSubmit}
      isSubmit={reduxState.resetPasswordSend.waiting}>
      <Input
        style={{ textAlign: 'center' }}
        onChange={handleFormChange}
        placeholder="Enter your email"
        name="email"
      />
      <Notification error={!!error}>{error || alert}</Notification>
      <StyledLink to="/" style={{ marginRight: '8px' }}>
        Comeback
      </StyledLink>
    </Form>
  )
}

const mapStateToProps = ({ errors, resetPasswordSend }) => ({
  reduxState: { errors, resetPasswordSend },
})

const mapDispatchToProps = { resetPasswordDispatch }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ResetPassword))
