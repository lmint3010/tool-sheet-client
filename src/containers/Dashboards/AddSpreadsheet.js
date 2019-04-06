import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddSpreadsheetUI from '../../components/Layout/AddSpreadsheet'
import isEmpty from '../../validation/isEmpty'
import {
  addNewSpreadsheetDispatch,
  deleteSpreadsheetDispatch,
  fetchSpreadsheetDispatch,
} from '../../actions/spreadsheetAction'
import { setLoadingSpreadsheet } from '../../actions/creators/spreadsheet'
import { getAllSpreadsheet } from '../../actions/spreadsheetAction'
import api from '../../api'
import Axios from 'axios'
import store from '../../store'

// Stateful Component AddSpreadsheet
class AddSpreadsheet extends Component {
  state = {
    input: { sprsheetUri: '', alias: '' },
    list: [],
    spreadsheet: {
      loading: false,
      fetching: { status: false, spreadsheetId: '' },
    },
    errors: '',
  }

  // TODO: Consider changing to getDerivedStateFromProps. ComponentWillReceiveProps is deprecated
  async componentWillReceiveProps({
    reduxState: { errors, google_verify, spreadsheet },
    history,
  }) {
    if (this.state.spreadsheet.loading !== spreadsheet.loading) {
      const nextState = {
        ...this.state.spreadsheet,
        loading: spreadsheet.loading,
      }
      this.setState({ spreadsheet: nextState })
    }
    if (
      this.state.spreadsheet.fetching.spreadsheetId !==
      spreadsheet.fetching.spreadsheetId
    ) {
      const nextState = {
        ...this.state.spreadsheet,
        fetching: {
          status: spreadsheet.fetching.status,
          spreadsheetId: spreadsheet.fetching.spreadsheetId,
        },
      }
      this.setState({ spreadsheet: nextState })
    }
    if (!isEmpty(errors)) {
      this.setState({ errors })
    }
    if (google_verify.url) {
      history.push('/google-verify')
      window.open(
        google_verify.url,
        'popup',
        'width=600, height=500, left=50, top=50'
      )
    }
    if (!spreadsheet.loading) {
      const list = await getAllSpreadsheet()
      this.setState({ list })
    }
  }

  async componentDidMount() {
    store.dispatch(setLoadingSpreadsheet(true))
    const list = await getAllSpreadsheet()
    store.dispatch(setLoadingSpreadsheet(false))
    this.setState({ list })
  }

  handleFormChange = ({ target }) => {
    const nextInput = { ...this.state.input, [target.name]: target.value }
    this.setState({ input: nextInput })
  }

  handleFormSubmit = async e => {
    e.preventDefault()
    const {
      state: { input },
      props: {
        reduxState: { auth: user },
        addNewSpreadsheetDispatch,
      },
    } = this
    const requestBody = { ...input, userId: user.user._id }
    addNewSpreadsheetDispatch(requestBody)
  }

  handleDeleteSpreadsheet = async spreadsheetId => {
    const {
      props: { deleteSpreadsheetDispatch },
    } = this
    const requestBody = { spreadsheetId }
    deleteSpreadsheetDispatch(requestBody)
  }

  handleFetchSpreadsheet = spreadsheetId => {
    const {
      props: {
        fetchSpreadsheetDispatch,
        reduxState: {
          auth: { user },
        },
      },
    } = this
    const requestBody = { spreadsheetId, userId: user._id }
    fetchSpreadsheetDispatch(requestBody)
  }

  handleSyncSpreadsheet = (spreadsheetIdFromUser, id) => {
    const requestBody = {
      spreadsheetIdFromUser,
      username: this.props.reduxState.auth.user.name,
      userId: this.props.reduxState.auth.user._id,
      id,
    }
    Axios.post(api.spreadsheet.syncinfo, requestBody)
      .then(async () => {
        const list = await getAllSpreadsheet()
        this.setState({ list })
      })
      .catch(err => console.log(err))
  }

  render() {
    const {
      state: { list, errors, spreadsheet },
      handleFormChange,
      handleFormSubmit,
      handleDeleteSpreadsheet,
      handleFetchSpreadsheet,
      handleSyncSpreadsheet,
    } = this

    return (
      <AddSpreadsheetUI
        errors={errors}
        list={list}
        onDelete={handleDeleteSpreadsheet}
        onSubmit={handleFormSubmit}
        onChange={handleFormChange}
        onFetch={handleFetchSpreadsheet}
        spreadsheetSync={handleSyncSpreadsheet}
        spreadsheetLoading={spreadsheet.loading}
        spreadsheetFetching={spreadsheet.fetching}
      />
    )
  }
}

const mapStateToProps = ({ auth, errors, google_verify, spreadsheet }) => ({
  reduxState: { auth, errors, google_verify, spreadsheet },
})

const mapDispatchToProps = {
  addNewSpreadsheetDispatch,
  deleteSpreadsheetDispatch,
  fetchSpreadsheetDispatch,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSpreadsheet)
