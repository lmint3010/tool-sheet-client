import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// UI Component
import InputGroup from '../themes/styled_comp/InputGroup'
import Form from '../themes/styled_comp/Form'
import theme from '../themes'

// Styled Component
const StyledLink = styled(Link)`
  &:hover {
    color: ${theme.color.text.main};
    text-decoration: underline;
  }
  font-size: 13px;
  display: inline-block;
  margin-top: 8px;
  text-decoration: none;
  color: ${theme.color.text.grayLight};
`

export default ({ onChange, onSubmit, errors }) => (
  <Form title="Welcome" onSubmit={onSubmit}>
    <InputGroup
      onChange={onChange}
      label="Email"
      placeholder="Email"
      name="email"
      error={errors.email}
    />
    <InputGroup
      onChange={onChange}
      label="Password"
      type="password"
      placeholder="Password"
      name="password"
      error={errors.password}
    />
    <StyledLink to="/signup" style={{ marginRight: '8px' }}>
      Create new account?
    </StyledLink>
    <StyledLink to="/resetPassword" style={{ marginLeft: '8px' }}>
      Forgot password?
    </StyledLink>
  </Form>
)
