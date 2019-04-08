import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

import theme from '../../themes'
import LoginForm from '../../containers/Login'
import SignUp from '../../containers/Signup'

const Wrapper = styled.div`
  background-color: ${theme.color.background.light};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const WelcomeBox = styled.div`
  text-align: center;
  width: 28%;
  min-width: 18%;
`

const Title = styled.h1`
  color: ${theme.color.text.main}
  margin-bottom: 8px;
`

const Subtitle = styled.p`
  color: ${theme.color.text.grayLight}
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 24px 0;
`

export default () => (
  <Wrapper>
    <WelcomeBox>
      <Title>Data Entry</Title>
      <Subtitle>Use this tool to hack your tasks performance</Subtitle>
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/signup" component={SignUp} />
    </WelcomeBox>
  </Wrapper>
)
