import React, { Component, PropTypes } from 'react'

import styles from 'css/Footer'
class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          Made with
          <span className={styles.heart} />
          <a className={styles.link} href="#">all over the world</a>
        </div>
        <div className={styles.social} />
      </div>
    )
  }
}

export default Footer
