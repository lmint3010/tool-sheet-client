import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddSpreadsheetUI from '../../components/Layout/AddSpreadsheet'
import isEmpty from '../../validation/isEmpty'
import {
  addNewSpreadsheetDispatch,
  deleteSpreadsheetDispatch,
  fetchSpreadsheetDispatch,
  likeSpreadsheetDispatch,
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
    filter: '',
    spreadsheet: {
      loading: false,
      fetching: { status: false, spreadsheetId: '' },
    },
    errors: '',
    needVerify: false,
  }

  async componentWillReceiveProps({
    reduxState: { errors, google_verify, spreadsheet, waiting_verify },
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

    if (!isEmpty(errors)) this.setState({ errors })

    if (google_verify.url && !waiting_verify) {
      this.setState({ needVerify: true })
      window.open(
        google_verify.url,
        'popup',
        'width=600, height=500, left=50, top=50'
      )
    } else {
      this.setState({ needVerify: false })
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

  handleLikeSpreadsheet = spreadsheetId => {
    const {
      reduxState: {
        auth: {
          user: { _id: userId },
        },
      },
    } = this.props
    this.props.likeSpreadsheetDispatch({ userId, spreadsheetId })
  }

  handleFilter = event => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  render() {
    const {
      state: { list, errors, spreadsheet, filter, needVerify },
      props: {
        reduxState: {
          auth: { user },
        },
      },
      handleFormChange,
      handleFormSubmit,
      handleDeleteSpreadsheet,
      handleFetchSpreadsheet,
      handleSyncSpreadsheet,
      handleLikeSpreadsheet,
      handleFilter,
    } = this

    return (
      <AddSpreadsheetUI
        user={user}
        errors={errors}
        list={list}
        filter={filter}
        onDelete={handleDeleteSpreadsheet}
        onSubmit={handleFormSubmit}
        onChange={handleFormChange}
        onFetch={handleFetchSpreadsheet}
        onFilter={handleFilter}
        displayVerify={needVerify}
        spreadsheetSync={handleSyncSpreadsheet}
        spreadsheetLike={handleLikeSpreadsheet}
        spreadsheetLoading={spreadsheet.loading}
        spreadsheetFetching={spreadsheet.fetching}
      />
    )
  }
}

const mapStateToProps = ({
  auth,
  errors,
  google_verify,
  spreadsheet,
  waiting_verify,
}) => ({
  reduxState: { auth, errors, google_verify, spreadsheet, waiting_verify },
})

const mapDispatchToProps = {
  addNewSpreadsheetDispatch,
  deleteSpreadsheetDispatch,
  fetchSpreadsheetDispatch,
  likeSpreadsheetDispatch,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSpreadsheet)
