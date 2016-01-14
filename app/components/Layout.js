import React, { Component, PropTypes } from 'react'

import Nav from 'components/Nav'
import Footer from 'components/Footer'
import styles from 'css/Layout'

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <Nav />
        <div className={styles.content}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
