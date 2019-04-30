import React from 'react'
import styled from 'styled-components'

import theme from '../index'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`

const Label = styled.p`
  color: ${theme.color.text.gray};
  font-size: 14px;
  font-weight: 500;
  padding: 7px 14px;
  min-width: 25%;
  margin: 10px 0;
  text-align: left;
`

export const Input = styled.input`
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(68, 139, 255, 0.25);
    border-color: #448bff;
  }
  &::placeholder {
    color: rgba(135, 150, 165, 0.65);
  }
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.borderColor || 'rgba(100, 100, 100, .15)'};
  border-radius: 4px;
  color: ${theme.color.text.gray};
  font-weight: 500;
  height: calc(1.4285714286em + 0.75rem + 2px);
  box-sizing: border-box;
  font-size: 13.725px;
  padding: 6px 12px;
  outline: none;
  min-width: 100%;
`

export const TextArea = styled.textarea`
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(68, 139, 255, 0.25);
    border-color: #448bff;
  }
  &::placeholder {
    color: rgba(135, 150, 165, 0.65);
  }
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.borderColor};
  border-radius: 4px;
  color: ${theme.color.text.gray};
  font-weight: 500;
  height: calc(1.4285714286em + 0.75rem + 2px);
  box-sizing: border-box;
  font-size: 13.725px;
  padding: 6px 12px;
  outline: none;
  min-width: 100%;
`

const InputBox = styled.div`
  width: 100%;
`

const Desc = styled.div`
  color: ${theme.color.text.grayLight}
  font-size: 12px;
  margin: 8px 0;
  text-align: left;
`

export const Error = styled.div`
color: ${theme.color.text.danger}
font-size: 12px;
margin: 8px 0;
text-align: left;
`

export default ({
  label,
  placeholder,
  type,
  name,
  desc,
  error,
  onChange,
  noLabel,
}) => (
  <Wrapper>
    {noLabel ? null : <Label>{label}</Label>}
    <InputBox>
      <Input
        onChange={onChange}
        name={name}
        type={type || 'text'}
        placeholder={placeholder}
        borderColor={!error ? 'rgba(135,150,165,.15)' : theme.color.text.danger}
      />
      <Desc>{desc}</Desc>
      {error ? <Error>{error}</Error> : null}
    </InputBox>
  </Wrapper>
)
