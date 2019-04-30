import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// import isEmpty from '../validation/isEmpty'
// Components
import DashboardUI from '../components/Layout/Dashboard'

class Dashboard extends Component {
  state = {
    displayScrollButton: false,
  }

  componentDidMount() {
    const {
      reduxState: { auth },
    } = this.props
    if (!auth.isAuthenticated) window.location.href = '/'
  }

  handleScrolling = event => {
    const { scrollTop } = event.target
    const { displayScrollButton } = this.state
    if (scrollTop > 600 && !displayScrollButton) {
      this.setState({ displayScrollButton: true })
    }
    if (scrollTop < 600 && displayScrollButton) {
      this.setState({ displayScrollButton: false })
    }
  }

  render() {
    const {
      handleScrolling,
      state: { displayScrollButton },
    } = this
    return (
      <DashboardUI
        onScroll={handleScrolling}
        displayScrollButton={displayScrollButton}
      />
    )
  }
}

const mapStateToProps = ({ auth, google_verify }) => ({
  reduxState: { auth, google_verify },
})

export default withRouter(connect(mapStateToProps)(Dashboard))
