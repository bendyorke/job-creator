import React, { Component, PropTypes } from 'react'
import { Typeahead } from 'react-typeahead'

import styles from 'css/TypeAhead'

class StyledTypeAhead extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className, ...props } = this.props

    return <Typeahead
      className={`${styles.typeahead} ${className}`}
      {...props} />
  }
}

export default StyledTypeAhead
