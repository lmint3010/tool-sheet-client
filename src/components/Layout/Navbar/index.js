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
  Powered,
} from './styled'

const NavbarUI = ({ user, logout, toolbox, onChange, options }) => {
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
          {options.map((item, index) => (
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
              onClick={() => onChange(index, 'options')}>
              <ItemIcon>
                <i className={item.icon} />
              </ItemIcon>
              <Content>{item.title}</Content>
            </StyledLink>
          ))}
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
              onClick={() => onChange(index, 'toolbox')}>
              <ItemIcon>
                <i className={item.icon} />
              </ItemIcon>
              <Content>{item.title}</Content>
            </StyledLink>
          ))}
        </List>
      </NavBody>
      <Powered>DFO Global Performance {new Date().getFullYear()}</Powered>
    </Nav>
  )
}

export default React.memo(NavbarUI)
