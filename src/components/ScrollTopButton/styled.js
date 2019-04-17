import styled from 'styled-components'
import theme from '../../themes'

// Scroll To Top Button
export const ScrollTopButton = styled.button`
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
  border: none;
  background-color: ${theme.color.text.main};
  font-size: 1.2rem;
  color: white;
  width: 52px;
  height: 52px;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .16);
  cursor: pointer;
  transition: 200ms ease-out;
  outline: none;
`