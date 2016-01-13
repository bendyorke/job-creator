import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import styles from 'css/Nav'

const SECTIONS = ['Candidates', 'Jobs']

class Nav extends Component {
  static propTypes = {
    path: PropTypes.array,
  };

  renderSection = title => {
    const { path: [current] } = this.props
    const section = title.toLowerCase()
    const isCurrent = current === section

    return (
      <Link
        className={isCurrent ? styles.currentSection : styles.section}
        to={'/' + section}
        key={title}>
        {title}
      </Link>
    )
  };

  render() {
    const { path: [currentSection] } = this.props
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <div className={styles.logo}>B</div>
          </div>

          {/* Sections */}
          {SECTIONS.map(this.renderSection)}

          {/* Search */}
          <input
            className={styles.search}
            placeholder="Search"/>

          {/* Profile */}
          <div className={styles.settings} />
          <div className={styles.profile}>
            <div className={styles.profilePhoto} />
            <div className={styles.profileCaret} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  path: state.routing.location.pathname.slice(1).split('/'),
}), {})(Nav)
