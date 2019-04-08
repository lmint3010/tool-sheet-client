import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import styled from 'styled-components'
import theme from '../themes'
import store from '../store'

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${theme.color.background.light};
  margin: 0;
  padding: 0;
`

const withRoot = WrappedComponent => props => (
  <Provider store={store}>
    <Router>
      <Wrapper>
        <WrappedComponent {...props}/>
      </Wrapper>
    </Router>
  </Provider>
);

export default withRoot;
