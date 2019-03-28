import React, { Component } from 'react'
import SearchContentUI from '../../components/Layout/DashboardLayout/SearchContent'
import store from '../../store'
import { setSearchStatus } from '../../actions/creators/search'
import { connect } from 'react-redux'
import Axios from 'axios'
import api from '../../api'

class SearchContent extends Component {
  state = {
    search: {
      code: '',
      content: '',
    },
    searching: false,
    searchResults: [],
  }

  componentWillReceiveProps({ reduxState: { searching } }) {
    if (searching !== this.state.searching) this.setState({ searching })
  }

  handleFormChange = ({ target }) => {
    const nextState = {
      ...this.state.search,
      [target.name]: target.value,
    }
    this.setState({ search: nextState })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const {
      state: { search: bodyRequest },
    } = this
    store.dispatch(setSearchStatus(true))
    Axios.post(api.spreadsheet.search, bodyRequest).then(
      ({ data: { searchResults } }) => {
        store.dispatch(setSearchStatus(false))
        this.setState({ searchResults })
      }
    )
  }

  render() {
    const {
      handleFormChange,
      handleFormSubmit,
      state: { searching, searchResults, search },
    } = this
    return (
      <SearchContentUI
        search={search}
        searchResults={searchResults}
        searching={searching}
        onSubmit={handleFormSubmit}
        onChange={handleFormChange}
      />
    )
  }
}

const mapStateToProps = ({ searching }) => ({
  reduxState: { searching },
})

export default connect(mapStateToProps)(SearchContent)
