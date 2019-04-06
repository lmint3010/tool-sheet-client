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
  }
  font-size: 13px;
  display: inline-block;
  margin-top: 8px;
  color: ${theme.color.text.grayLight};
`
// Functional Component
export default ({ onChange, onSubmit, errors }) => (
  <Form title="Create new account" onSubmit={onSubmit}>
    <InputGroup
      onChange={onChange}
      label="Your name"
      placeholder="Enter your name"
      name="name"
      error={errors.name}
    />
    <InputGroup
      onChange={onChange}
      label="Email"
      placeholder="something@dfo.global"
      name="email"
      error={errors.email}
      desc="Use DFO Global mail to create an account"
    />
    <InputGroup
      onChange={onChange}
      label="Password"
      placeholder="Create your password"
      type="password"
      name="password"
      error={errors.password}
    />
    <InputGroup
      onChange={onChange}
      label="Confirm Password"
      placeholder="Enter your password again"
      type="password"
      name="password2"
      error={errors.password2}
    />
    <StyledLink to="/">Have an account?</StyledLink>
  </Form>
)
