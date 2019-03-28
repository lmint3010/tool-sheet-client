import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import isEmpty from '../validation/isEmpty'
// Components
import DashboardUI from '../components/Layout/Dashboard'

class Dashboard extends Component {
  // Lifecycle Method
  componentDidMount() {
    const {
      reduxState: { auth, google_verify },
      history,
    } = this.props
    if (!auth.isAuthenticated) history.push('/')
    if (!isEmpty(google_verify.url)) history.push('/google-verify')
  }

  render() {
    return <DashboardUI />
  }
}

const mapStateToProps = ({ auth, google_verify }) => ({
  reduxState: { auth, google_verify },
})

export default withRouter(connect(mapStateToProps)(Dashboard))
