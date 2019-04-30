import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { protectedRoute } from '../../routes'

import theme from '../../themes'
import LoginForm from '../../containers/Login'
import SignUp from '../../containers/Signup'
import ResetPassword from '../../components/ResetPassword'
import ResetPasswordForm from '../../components/ResetPassword/form'

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

const AuthenticateUI = ({ isAuthenticated }) => {
  return (
    <Wrapper>
      <WelcomeBox>
        <Title>Data Entry</Title>
        <Subtitle>Use this tool to hack your tasks performance</Subtitle>
        <Route
          exact
          path="/"
          render={() =>
            protectedRoute(isAuthenticated, '/dashboard', <LoginForm />)
          }
        />
        <Route
          exact
          path="/signup"
          render={() =>
            protectedRoute(isAuthenticated, '/dashboard', <SignUp />)
          }
        />
        <Route
          exact
          path="/resetPassword"
          render={() => protectedRoute(isAuthenticated, '/', <ResetPassword />)}
        />
        <Route
          exact
          path="/resetPassword/:token/:userid"
          render={({match}) => protectedRoute(isAuthenticated, '/', <ResetPasswordForm match={match} />)}
        />
      </WelcomeBox>
    </Wrapper>
  )
}

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({ isAuthenticated })

export default connect(mapStateToProps)(React.memo(AuthenticateUI))
