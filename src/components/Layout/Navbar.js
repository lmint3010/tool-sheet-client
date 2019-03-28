import React from 'react'
import styled from 'styled-components'

import color from '../../themes/color'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom'
import '../../assets/icons/all.min.css'

const Nav = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  box-sizing: border-box;
  margin: 0;
  padding: 12px 16px;
  box-shadow: ${color.boxShadow.box};
  background-color: ${color.background.dark};
  width: 14vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const StyledLogo = styled(Logo)`
  width: 30px;
  height: 30px;
`

const BrandName = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: ${color.text.main}
  margin-left: 12px;
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`

const NavBody = styled.div`
  display: flex;
  flex-direction: column;
`

const UserBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

const UserAva = styled.img`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 4px;
  box-shadow: 0 5px 10px 0 rgba(50, 50, 50, 0.15);
`

const Username = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-weight: 500;
  color: ${color.text.grayLight};
  margin-left: 16px;
`

const Name = styled.div`
  color: ${color.text.main};
  font-size: 14px;
`

const Title = styled.p`
  font-size: 82%;
  color: ${color.text.grayLight};
  font-weight: 500;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`

const StyledLink = styled(Link)`
  &:visted {
    color: ${color.text.gray};
  }
  &:hover {
    color: ${props => (props.color ? props.color : 'rgba(0, 0, 0, .76)')};
  }
  color: ${props => (props.color ? props.color : color.text.gray)};
  text-decoration: none;
  transition: 0.25ms linear;
  font-size: 14px;
  margin: 10px 0;
  transition: 70ms linear;
`

const Content = styled.span`
  margin-left: 16px;
  font-size: 14px;
  font-weight: 500;
`

const ItemIcon = styled.span`
  color: ${props => (props.color ? props.color : 'inherit')}
  display: inline-block;
  width: 16px;
`

const NavbarUI = ({ user, logout, toolbox, onChange }) => {
  const currentPath = window.location.pathname
  return (
    <Nav>
      <Brand>
        <StyledLogo />
        <BrandName>DFO Content Team</BrandName>
      </Brand>

      <NavBody>
        <UserBox>
          <UserAva src={user.avatar} size="36px" />
          <Username>
            <Name>{user.name}</Name>
            Member
          </Username>
        </UserBox>

        <Title>Settings</Title>
        <List>
          <StyledLink to="/" onClick={logout} color={color.text.danger}>
            <ItemIcon>
              <i className="far fa-sign-out" />
            </ItemIcon>
            <Content>Log out</Content>
          </StyledLink>
        </List>

        <Title>Toolbox</Title>
        <List>
          {toolbox.map((item, index) => (
            <StyledLink
              className={item.disabled ? 'disable-href' : null}
              to={item.path}
              color={
                item.isActive || currentPath === item.path
                  ? color.text.main
                  : null
              }
              index={index}
              key={index}
              onClick={() => onChange(index)}>
              <ItemIcon>
                <i className={item.icon} />
              </ItemIcon>
              <Content>{item.title}</Content>
            </StyledLink>
          ))}
        </List>
      </NavBody>
    </Nav>
  )
}

export default React.memo(NavbarUI)
