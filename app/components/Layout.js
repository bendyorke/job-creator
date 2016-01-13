import React, { Component, PropTypes } from 'react'

import Nav from 'components/Nav'
import Footer from 'components/Footer'
import styles from 'css/Layout'

class Layout extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div>
        <Nav />

        <Footer />
      </div>
    )
  }
}

export default Layout
