import styled from 'styled-components'
import theme from '../../../themes'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const PageTitle = styled.h2`
  color: ${theme.color.main};
  margin-bottom: 8px;
`

export const Inputer = styled.textarea`
  height: 100%;
  resize: none;
  background: transparent;
  outline: none;
  border: none;
  font-size: 14px;
  color: rgba(0, 0, 0, .7);
  border-top: 1px solid rgba(100, 100, 100, .2);
  padding-top: 1rem;
`

export const Options = styled.div`
  display: flex;
`

export const Button = styled.button`
  background: ${theme.color.main};
  color: white;
  padding: 6px 12px;
  border: 1px solid ${theme.color.main};
  border-radius: 2px;
  margin-bottom: 8px;
  font-size: .8rem;
  cursor: pointer;
  outline: none;
`