import React, { Component } from 'react'
import SearchContentUI from '../../components/Layout/SearchContent'
import { searchDispatch } from '../../actions/searchAction'
import { connect } from 'react-redux'

class SearchContent extends Component {
  state = {
    search: {
      code: '',
      content: '',
      filter: '',
    },
    searching: false,
    searchResults: [],
  }

  componentWillReceiveProps({
    reduxState: {
      searching: { status, result },
    },
  }) {
    if (status !== this.state.searching) this.setState({ searching: status })
    if (result && result.length !== 0) this.setState({ searchResults: result })
    else this.setState({ searchResults: [] })
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
      state: { search: requestBody },
      props: { searchDispatch },
    } = this
    searchDispatch(requestBody)
  }

  render() {
    const {
      handleFormChange,
      handleFormSubmit,
      state: { searching, searchResults, search },
    } = this
    return (
      <SearchContentUI
        filter={search.filter}
        searchOnCode={search.code}
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

const mapDispatchToProps = { searchDispatch }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContent)
