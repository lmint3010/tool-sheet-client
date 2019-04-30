import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Input as InputTemp } from '../../themes/styled_comp/InputGroup'
import Form from '../../themes/styled_comp/Form'

import {
  resetPasswordValidTokenDispatch,
  renewPasswordDispatch,
} from '../../actions/resetPassword'

const Input = styled(InputTemp)`
  margin: 6px 0;
`

const Status = styled.p`
  color: ${props => (props.error ? 'tomato' : 'mediumseagreen')};
  margin: 8px 0 0 0;
  font-size: 12px;
`

const StyledLink = styled(Link)`
  color: dodgerblue;
  font-size: 13px;
`

// My Component
const ResetPasswordForm = ({
  reduxState,
  resetPasswordValidTokenDispatch,
  renewPasswordDispatch,
  match,
}) => {
  const [newPassword, setNewPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [status, setStatus] = useState({ value: '', isError: true })

  useEffect(() => {
    const { token, userid } = match.params
    resetPasswordValidTokenDispatch({
      resetToken: token,
      userId: userid,
    })
  }, [])

  useEffect(() => {
    const { renewing, renewed } = reduxState
    renewing && setStatus({ value: 'Please wait...', isError: false })
    renewed &&
      setStatus({
        value: `Your password has been change`,
        isError: false,
      })
  })

  const onFormChange = setter => ({ target }) => {
    setter(target.value)
    setStatus({ ...status, value: '' })
  }

  const onSubmit = e => {
    e.preventDefault()
    setStatus({ ...status, value: '' })
    if (newPassword === confirm) {
      // Validate
      const ValidateRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/g

      if (ValidateRegex.test(newPassword)) {
        setStatus({ ...status, value: '' })
        const { userid } = match.params
        renewPasswordDispatch({
          password: newPassword,
          userId: userid,
        })
        return
      }
      setStatus({
        ...status,
        value: 'At least 1 uppercase, 1 special characters and 1 Number ',
      })
      return
    }
    setStatus({
      ...status,
      value: 'Password not matched',
    })
  }

  if (reduxState.valid) {
    return (
      <Form
        onSubmit={onSubmit}
        isSubmit={reduxState.renewed || reduxState.renewing}>
        <Input
          placeholder="New Password"
          onChange={onFormChange(setNewPassword)}
        />
        <Input
          placeholder="Confirm Password"
          onChange={onFormChange(setConfirm)}
        />
        <Status error={status.isError}>{status.value}</Status>
        {reduxState.renewed ? <StyledLink to="/">Login</StyledLink> : null}
      </Form>
    )
  } else {
    return (
      <>
        <h2 style={{ color: 'rgba(100, 100, 100, .6)' }}>
          This url maybe expirated or not existed
        </h2>
        <StyledLink to="/resetPassword">Back</StyledLink>
      </>
    )
  }
}

const mapStateToProps = ({ resetPasswordSend }) => ({
  reduxState: resetPasswordSend,
})

const mapDispatchToProps = {
  resetPasswordValidTokenDispatch,
  renewPasswordDispatch,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ResetPasswordForm))
