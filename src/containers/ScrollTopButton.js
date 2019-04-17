import React, { Component } from 'react'
import ScrollTopButtonUI from '../components/ScrollTopButton'

export default class ScrollTopButton extends Component {
  state = {
    isVisible: this.props.isVisible
  }

  componentWillReceiveProps({ isVisible }) {
    if(isVisible !== this.state.isVisible) {
      this.setState({ isVisible })
    }
  }

  onScrollTop = () => {
    const workspace = document.getElementById(this.props.on)
    const scrollToTop = () => {
      window.requestAnimationFrame(() => {
        if(workspace.scrollTop > 0) {
          workspace.scrollTo(0, workspace.scrollTop - 120)
          scrollToTop()
        }
      })
    }
    scrollToTop()
  }

  render() {
    const {onScrollTop, state: { isVisible }} = this
    return <ScrollTopButtonUI isVisible={isVisible} onClick={onScrollTop} />
  }
}