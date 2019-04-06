import React, { Component } from 'react'
import TeammateUI from '../../components/Layout/Teammate'
import api from '../../api'
import Axios from 'axios'

export default class Teammate extends Component {
  state = {
    users: [],
  }

  async componentDidMount() {
    const nextState = await Axios.get(api.users.all)
    this.setState({ users: nextState.data })
  }

  render() {
    const {
      state: { users },
    } = this
    return <TeammateUI users={users} />
  }
}
