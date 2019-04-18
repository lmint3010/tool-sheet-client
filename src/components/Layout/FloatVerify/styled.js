import styled from 'styled-components'
import theme from '../../../themes'

import { Input2, SubmitBtn2 } from '../AddSpreadsheet/styled'

export const VerifyContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index; 10000;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to top, #92fe9db5 0%, #00c9ffb5 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${props => (props.display === 'false' ? 'none' : '')};
`

export const VerifyForm = styled.form`
  background-color: white;
  border-radius: 4px;
  padding: 1.4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
`

export const SheildLogo = styled.i`
  font-size: 65px;
  margin-bottom: 1rem;
  color: ${theme.color.text.success};
`

export const VerifyInput = styled(Input2)`
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(65, 249, 147, 0.25);
    border-color: ${theme.color.text.success};
  }
  flex-grow: 1;
  outline-color: green;
  width: 100%;
  margin: 0;
`

export const VerifySubmitBtn = styled(SubmitBtn2)`
  &:hover {
    opacity: 1;
    background-color: mediumseagreen;
  }
  background-color: ${theme.color.text.success}
  width: 100%;
  opacity: .7;
  margin-top: 8px;
  transition: 150ms;
`

export const VerifyTitle = styled.h2`
  color: ${theme.color.text.success};
  margin: 0;
  margin-bottom: 1rem;
  user-select: none;
`

export const VerifyLink = styled.p`
  font-size: 13px;
  color: dodgerblue;
  margin: 1rem 0 0 0;
  text-decoration: underline;
  cursor: pointer;
`

export const VerifyError = styled.span`
  font-size: 13px;
  color: tomato;
  margin-bottom: 8px;
  height: 15px;
`