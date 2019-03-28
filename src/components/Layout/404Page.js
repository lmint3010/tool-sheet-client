import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import color from '../../themes/color'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: ${color.background.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color: ${color.text.dark};
  font-weight: 600;
`

const Suggestion = styled.p`
  color: ${color.text.gray}
`

const StyledLink = styled(Link)`
  &:hover {
    color: ${color.text.main}
  }
  color: ${color.text.main}
  text-decoration: none;
`

const ErrorCode = styled.h2`
  color: ${color.text.grayLight}
  font-size: 22px;
`

export default (props) => (<Wrapper>
  <Title>Sorry! the page you are looking for doesn't exist.</Title>
  <Suggestion>Please go back to <StyledLink to='/'>home</StyledLink>.</Suggestion>
  <ErrorCode>-- 404 --</ErrorCode>
</Wrapper>)