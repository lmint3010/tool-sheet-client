import React from 'react'
import '../../../assets/icons/all.min.css'
import theme from '../../../themes'

import {
  Nav,
  Brand,
  StyledLink,
  StyledLogo,
  BrandName,
  NavBody,
  UserBox,
  UserAva,
  Username,
  Name,
  Title,
  List,
  ItemIcon,
  Content,
} from './styled'

const NavbarUI = ({ user, logout, toolbox, onChange }) => {
  const currentPath = window.location.pathname
  return (
    <Nav>
      <Brand>
        <StyledLogo />
        <BrandName>DFO Content</BrandName>
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
          <StyledLink to="/" onClick={logout} color={theme.color.text.danger}>
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
                  ? theme.color.text.main
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
