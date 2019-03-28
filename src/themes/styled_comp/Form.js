import React from 'react'
import styled from 'styled-components'

import color from '../color'

// Styled Components
const Form = styled.form`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,.05);
  border-width: 0;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

const FormHeader = styled.div`
  padding: .75rem 1.25rem;
  margin-bottom: 0;
  font-weight: 700;
  color: ${color.text.gray}
  border-radius: 4px 4px 0 0;
  background-color: transparent;
  border-bottom: 1px solid rgba(19,24,44, .065);
`

const FormBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`

export const SubmitBtn = styled.input`
  &:hover {
    background-color: #1e73ff;
    border-color: #1e73ff
  }
  color: #fff;
  background-color: #448bff;
  border-color: #448bff;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: .475rem .75rem;
  font-size: .875rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 0 0 .25rem .25rem;
  transition: .06s linear;
`

export default ({ children, title, onSubmit }) => (
<Form onSubmit={onSubmit}>
  { title ? <FormHeader>{title}</FormHeader>: null }
  <FormBody>{children}</FormBody>
  <SubmitBtn type='submit' value='Submit' />
</Form>)