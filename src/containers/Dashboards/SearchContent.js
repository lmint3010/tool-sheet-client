import React, { Component } from 'react'
import SearchContentUI from '../../components/Layout/DashboardLayout/SearchContent'
import { searchDispatch } from '../../actions/searchAction'
import { connect } from 'react-redux'

class SearchContent extends Component {
  state = {
    search: {
      code: '',
      content: '',
    },
    searching: false,
    searchResults: [],
    filterList: ['All'],
  }

  componentWillReceiveProps({
    reduxState: {
      searching: { status, result },
    },
  }) {
    if (status !== this.state.searching) this.setState({ searching: status })
    if (result && result.length !== 0) {
      const filterList = [...this.state.filterList]
      result
        .map(e => e.site)
        .forEach(site => {
          if (!filterList.includes(site)) filterList.push(site)
        })
      this.setState({
        searchResults: result,
        filterList,
      })
    } else this.setState({ searchResults: [] })
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

  handleResultFilter = ({ target }) => {
    const {
      props: {
        reduxState: {
          searching: { result },
        },
      },
    } = this
    if (target.value === 'All') {
      this.setState({ searchResults: result })
    } else {
      const nextState = {
        searchResults: result.filter(
          result =>
            result.site.toLowerCase().trim() === target.value.toLowerCase()
        ),
      }
      this.setState(nextState)
    }
  }

  render() {
    const {
      handleFormChange,
      handleFormSubmit,
      handleResultFilter,
      state: { searching, searchResults, search, filterList },
    } = this
    return (
      <SearchContentUI
        searchOnCode={search.code}
        searchResults={searchResults}
        searching={searching}
        onSubmit={handleFormSubmit}
        onChange={handleFormChange}
        filter={handleResultFilter}
        filterList={filterList}
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
