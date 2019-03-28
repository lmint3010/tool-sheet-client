import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// UI Component
import InputGroup from '../themes/styled_comp/InputGroup'
import Form from '../themes/styled_comp/Form'
import color from '../themes/color'

// Styled Component
const StyledLink = styled(Link)`
  &:hover {
    color: ${color.text.main}
  }
  font-size: 13px;
  display: inline-block;
  margin-top: 8px;
  color: ${color.text.grayLight}
`

export default ({ onChange, onSubmit, errors}) => (
<Form title='Welcome' onSubmit={onSubmit}>
  <InputGroup
    onChange={onChange}
    label='Email'
    placeholder='Email'
    name='email'
    error={errors.email} />
  <InputGroup
    onChange={onChange}
    label='Password'
    type='password'
    placeholder='Password'
    name='password'
    error={errors.password} />
  <StyledLink to='/signup'>Create new account?</StyledLink>
</Form>)

