import React from 'react'
import { withRouter } from 'react-router-dom'
import { object } from 'prop-types'

class ScrollToTop extends React.Component {
  static propTypes = {
    location: object, //eslint-disable-line
    children: object //eslint-disable-line
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
