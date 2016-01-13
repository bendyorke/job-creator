import React, { Component, PropTypes } from 'react'

import styles from 'css/Layout'

class Layout extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div>
        <div className={styles.nav} />
      </div>
    )
  }
}

export default Layout
