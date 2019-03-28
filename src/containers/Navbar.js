import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import NavbarUI from '../components/Layout/Navbar'

// Import Dispatch
import { LogoutDispatch } from '../actions/userAuthAction'

class Navbar extends Component {
  state = {
    toolbox: [
      {
        title: 'Add Spreadsheet',
        path: '/dashboard',
        icon: 'far fa-file-plus',
        disabled: false,
      },
      {
        title: 'Search Content',
        path: '/searchcontent',
        icon: 'far fa-search',
        disabled: false,
      },
      {
        title: 'Need Updates',
        path: '/needupdates',
        icon: 'far fa-pencil',
        disabled: true,
      },
    ],
  }

  handleLogout = () => {
    const { history, LogoutDispatch } = this.props
    LogoutDispatch(history)
  }

  handleChange = index => {
    const nextState = { ...this.state }
    console.log(this.props)
    nextState.toolbox = nextState.toolbox.map(e => {
      e.isActive = false
      return e
    })
    nextState.toolbox[index].isActive = true
    this.setState({ toolbox: nextState.toolbox })
  }

  render() {
    const {
      props: { reduxState },
      state: { toolbox },
      handleLogout,
      handleChange,
    } = this

    return (
      <NavbarUI
        user={reduxState.user}
        logout={handleLogout}
        toolbox={toolbox}
        onChange={handleChange}
      />
    )
  }
}

const mapStateToProps = ({ auth: { user } }) => ({
  reduxState: { user },
})

const mapDispatchToProps = { LogoutDispatch }

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navbar)
)
