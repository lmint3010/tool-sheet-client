import React from 'react'
import styled from 'styled-components'
import theme from '../index'

// Styled Components
const Form = styled.form`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
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
  color: ${theme.color.text.gray}
  border-radius: 4px 4px 0 0;
  background-color: transparent;
  border-bottom: 1px solid rgba(19,24,44, .065);
`

const FormBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
`

export const SubmitBtn = styled.input`
  &:disabled, &:disabled:hover {
    background: rgba(120, 120, 120 ,1);
    border-color: rgba(120, 120, 120 ,1);
    cursor: not-allowed;
  }
  &:hover {
    background-color: #1e73ff;
    border-color: #1e73ff;
  }
  color: #fff;
  background-color: #448bff;
  border-color: #448bff;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.475rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 0 0 0.25rem 0.25rem;
  transition: 0.06s linear;
`

export default ({ children, title, onSubmit, isSubmit }) => (
  <Form onSubmit={onSubmit}>
    {title ? <FormHeader>{title}</FormHeader> : null}
    <FormBody>{children}</FormBody>
    <SubmitBtn type="submit" value="Submit" disabled={isSubmit} />
  </Form>
)
