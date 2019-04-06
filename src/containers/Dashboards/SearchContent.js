import React, { Component } from 'react'
import SearchContentUI from '../../components/Layout/SearchContent'
import { searchDispatch } from '../../actions/searchAction'
import { connect } from 'react-redux'
import isEmpty from '../../validation/isEmpty'

class SearchContent extends Component {
  state = {
    search: {
      code: '',
      content: '',
    },
    searching: false,
    searchResults: [],
  }

  // TODO: Double check if the behavior is correct
  static getDerivedStateFromProps(props, state) {
    const { reduxState: {searching: {status, result}} } = props;
    if (status !== state.searching) {
      return { searching: status };
    }

    if (!isEmpty(result)) {
      return { searchResults: result };
    }

    return { searchResults: []}
  }

  // componentWillReceiveProps({
  //   reduxState: {
  //     searching: { status, result },
  //   },
  // }) {
  //   if (status !== this.state.searching) this.setState({ searching: status })
  //   if (result && result.length !== 0) this.setState({ searchResults: result })
  //   else this.setState({ searchResults: [] })
  // }

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
