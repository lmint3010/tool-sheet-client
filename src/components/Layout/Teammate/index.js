import React from 'react'
import { TitleStyled, List, Item, Name, Email, Wrapper } from './styled'

export default ({ users }) => {
  return (
    <Wrapper>
      <TitleStyled>Our team has {users.length} members</TitleStyled>
      <List>
        {users.map((user, index) => (
          <Item key={index}>
            <Name>{user.name}</Name>
            <Email>{user.email}</Email>
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}
