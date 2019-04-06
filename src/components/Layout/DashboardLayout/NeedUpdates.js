import React from 'react'
import styled from 'styled-components'
import theme from '../../../themes'

const Wrapper = styled.div`
  box-sizing: border-box;
`

const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  color: ${theme.color.text.dark};
`

export default props => (
  <Wrapper>
    <Title>Documents Need Update</Title>
    {/* <Subtitle>Remember check before you update</Subtitle> */}
  </Wrapper>
)
