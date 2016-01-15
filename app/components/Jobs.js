import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import styles from 'css/Jobs'

class Jobs extends Component {
  render() {
    return (
      <Link to="/jobs/new" className={styles.button}>
        Post new job
      </Link>
    )
  }
}

export default Jobs
