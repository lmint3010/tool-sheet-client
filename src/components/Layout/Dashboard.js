import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

// Components
import AddSpreadsheet from '../../containers/Dashboards/AddSpreadsheet'
// import GoogleVerify from '../../containers/Dashboards/GoogleVerify'
import SearchContent from '../../containers/Dashboards/SearchContent'
// import NeedUpdates from '../../containers/Dashboards/NeedUpdates'
import Navbar from '../../containers/Navbar'
import Teammate from '../../containers/Dashboards/Teammate'
import ScrollTopButton from '../../containers/ScrollTopButton'

const Wrapper = styled.div`
  display: flex;
`

const Container = styled.div`
  max-height: 100vh;
  width: 86vw;
  overflow: scroll;
  padding: 6px 4rem;
  background-color: #f9f9fa;
  flex-grow: 1;
  box-sizing: border-box;
`

export default ({ user, onScroll, displayScrollButton }) => (
  <Wrapper>
    <Navbar />
    <Container id="scollTopDiv" onScroll={onScroll}>
      <Route exact path="/dashboard" component={AddSpreadsheet} />
      {/* <Route exact path="/google-verify" component={GoogleVerify} /> */}
      <Route exact path="/searchcontent" component={SearchContent} />
      {/* <Route exact path="/needupdates" component={NeedUpdates} /> */}
      <Route exact path="/users" component={Teammate} />
    </Container>
    <ScrollTopButton on="scollTopDiv" isVisible={displayScrollButton} />
  </Wrapper>
)
