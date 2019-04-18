import React from 'react'
import {
  VerifyContainer,
  VerifyForm,
  SheildLogo,
  VerifyInput,
  VerifySubmitBtn,
  VerifyTitle,
  VerifyLink,
  VerifyError,
} from './styled'

export default ({ display, onChange, onSubmit, getVerifyCode, errors }) => {
  return (
    <VerifyContainer display={display.toString()}>
      <VerifyForm onSubmit={onSubmit}>
        <SheildLogo className="fas fa-shield-check" />
        <VerifyTitle>Google Guard</VerifyTitle>
        {errors ? <VerifyError>{errors}</VerifyError> : <VerifyError />}
        <VerifyInput
          placeholder="Enter Google verify code"
          onChange={onChange}
          name="code"
        />
        <VerifySubmitBtn type="submit" value="Send" />
        <VerifyLink onClick={getVerifyCode}>Get verify code</VerifyLink>
      </VerifyForm>
    </VerifyContainer>
  )
}
