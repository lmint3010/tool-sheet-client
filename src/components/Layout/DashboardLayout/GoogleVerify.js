import React from 'react'
import styled from 'styled-components'

import '../../../assets/icons/all.min.css'
import theme from '../../../themes'

// UI Components
import { Input, Error } from '../../../themes/styled_comp/InputGroup'
import { SubmitBtn } from '../../../themes/styled_comp/Form'

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SheildLogo = styled.i`
  font-size: 65px;
  color: ${theme.color.text.success};
`

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
  font-size: 28px;
  margin: 12px 0;
  color: ${theme.color.text.success};
  user-select: none;
`

const Subtitle = styled.p`
  font-size: 14px;
  margin: 0;
  margin-bottom: 24px;
  font-weight: 500;
  color: ${theme.color.text.gray};
  user-select: none;
`

const Input2 = styled(Input)`
  &::placeholder {
    text-align: center;
  }
  border-color: rgba(50, 50, 50, 0.15);
  min-width: 20vw;
  text-align: center;
`

const Submit2 = styled(SubmitBtn)`
  border-radius: 4px;
  margin: 12px 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const CenterError = styled(Error)`
  text-align: center;
  min-height: 16px;
`

const GetCodeButton = styled.button`
  border: none;
  font-size: 12px;
  text-decoration: underline;
  color: ${theme.color.text.gray}
  cursor: pointer;
`

export default ({ onChange, onSubmit, errors, getCode }) => (
  <Wrapper>
    <TitleBox>
      <SheildLogo className="fas fa-shield-check" />
      <Title>Google Authenticate</Title>
      <Subtitle>Please enter the verify code provide by Google</Subtitle>
      <Form onSubmit={onSubmit}>
        <Input2
          onChange={onChange}
          placeholder="Google Verify Code"
          name="code"
          type="password"
        />
        <Submit2 type="submit" value="Send" />
      </Form>
      <GetCodeButton onClick={getCode}>Get Google Verify Code</GetCodeButton>
      {errors ? <CenterError>{errors}</CenterError> : <CenterError />}
    </TitleBox>
  </Wrapper>
)
