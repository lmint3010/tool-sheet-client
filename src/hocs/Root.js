import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'
import color from '../themes/color'
import store from '../store'

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${color.background.light};
  margin: 0;
  padding: 0;
`

export default (props) => (
  <Provider store={store}>
    <Router>
      <Wrapper>
        { props.children }
      </Wrapper>
    </Router>
  </Provider>
)
