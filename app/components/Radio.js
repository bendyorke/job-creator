import React, { PropTypes } from 'react'
import classnames from 'classnames'

import styles from 'css/Radio'

const Radio = ({ active, className, children, ...props }) => {
  const classNames = classnames({
    [styles.inactive]: !active,
    [styles.active]: !!active,
    [className]: !!className,
  })

  return <div {...props} className={classNames}>{children}</div>
}

Radio.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Radio
