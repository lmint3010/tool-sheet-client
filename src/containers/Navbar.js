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
        title: 'Search Workspace',
        path: '/searchonproject',
        icon: 'far fa-bullseye-arrow',
        disabled: false,
      },
      {
        title: 'Generator',
        path: '/generator',
        icon: 'far fa-tasks-alt',
        disabled: true,
      },
    ],
    options: [
      {
        title: 'Update Information',
        path: '/users-modify',
        icon: 'far fa-user-edit',
        disabled: true,
      },
      {
        title: 'My Teammates',
        path: '/users',
        icon: 'far fa-users',
        disabled: false,
      },
    ],
  }

  handleLogout = () => {
    const { history, LogoutDispatch } = this.props
    LogoutDispatch(history)
  }

  handleChange = (index, listname) => {
    const nextState = { ...this.state }
    nextState.toolbox = nextState.toolbox.map(e => {
      e.isActive = false
      return e
    })
    nextState.options = nextState.options.map(e => {
      e.isActive = false
      return e
    })
    if (listname === 'toolbox') {
      nextState.toolbox[index].isActive = true
    } else {
      nextState.options[index].isActive = true
    }
    this.setState({ toolbox: nextState.toolbox, options: nextState.options })
  }

  render() {
    const {
      props: { reduxState },
      state: { toolbox, options },
      handleLogout,
      handleChange,
    } = this

    return (
      <NavbarUI
        user={reduxState.user}
        logout={handleLogout}
        toolbox={toolbox}
        options={options}
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
