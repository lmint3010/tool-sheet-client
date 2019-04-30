import styled from 'styled-components'
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg'
import theme from '../../../themes'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 12px 6px 12px 12px;
  box-shadow: ${theme.color.boxShadow.box};
  background-color: ${theme.color.background.light};
  color: white;
  width: 14.6vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const StyledLogo = styled(Logo)`
  width: 30px;
  height: 30px;
`

export const BrandName = styled.div`
  font-size: ${theme.fontSize.logo};
  font-weight: 700;
  color: ${theme.color.text.main}
  margin-left: 12px;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2.2rem;
  user-select: none;
`

export const NavBody = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const UserAva = styled.img`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 4px;
  box-shadow: 0 5px 10px 0 rgba(50, 50, 50, 0.15);
`

export const Username = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSize.small_text_1};
  font-weight: 500;
  color: ${theme.color.text.grayLight};
  margin-left: 16px;
`

export const Name = styled.div`
  color: ${theme.color.text.main};
  font-size: ${theme.fontSize.text};
`

export const Title = styled.p`
  font-size: ${theme.fontSize.small_text_1};
  margin-top: 1rem;
  color: ${theme.color.text.grayLight};
  font-weight: 500;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${theme.fontSize.text};
`

export const StyledLink = styled(Link)`
  &:visted {
    color: ${theme.color.text.gray};
  }
  &:hover {
    color: ${props => (props.color ? props.color : 'rgba(0, 0, 0, .6)')};
    background-color: ${theme.color.background.hover};
  }
  color: ${props => (props.color ? props.color : theme.color.text.gray)};
  text-decoration: none;
  font-size: ${theme.fontSize.text};
  margin: 0;
  padding: 11px 7px;
  transition: 70ms linear;
`

export const Content = styled.span`
  margin-left: 16px;
  font-size: ${theme.fontSize.text};
`

export const ItemIcon = styled.span`
  color: ${props => (props.color ? props.color : 'inherit')}
  display: inline-block;
  width: 16px;
`

export const Powered = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: ${theme.fontSize.sub_text};
  color: #e3f2fd;
  box-sizing: border-box;
  padding: 0.6rem 0;
  text-align: center;
  width: 100%;
  background: #64b5f6;
  user-select: none;
`
