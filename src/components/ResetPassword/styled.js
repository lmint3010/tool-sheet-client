import styled from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '../../themes'

const linkStyleSet = `
  &:hover {
    color: ${theme.color.text.main};
    text-decoration: underline;
  }
  font-size: 13px;
  display: inline-block;
  margin-top: 12px;
  text-decoration: none;
  cursor: pointer;
  color: ${theme.color.text.grayLight};
`

// Styled Component
export const StyledLink = styled(Link)`
  ${linkStyleSet}
`

export const StaticLink = styled.span`
  ${linkStyleSet}
`

export const Notification = styled.p`
  font-size: 12px;
  color: ${props => props.error ? 'tomato' : 'mediumseagreen'};
  display: block;
  margin: 12px 0 0 0;
`
