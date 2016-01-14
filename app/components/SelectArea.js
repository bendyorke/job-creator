import React, { PropTypes, Component } from 'react'

import styles from 'css/SelectArea'

class Option extends Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
  };

  render() {
    const { active, children, onClick } = this.props

    return (
      <div className={styles[active ? 'activeOption' : 'inactiveOption']} onClick={onClick}>
        {children}
      </div>
    )
  }
}

class SelectArea extends Component {
  state = {
    active: [],
  };

  static propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
  };

  get value() {
    this.state.active
  }

  handleClick = opt => event => {
    const { active } = this.state

    if (active.includes(opt)) {
      this.setState({
        active: active.filter(o => o !== opt),
      })
    } else {
      this.setState({
        active: [...active, opt],
      })
    }
  };

  render() {
    const { options, className, ...props } = this.props
    const { active } = this.state

    return (
      <div className={`${styles.container} ${className}`} {...props}>
        {options.map((opt, i) => (
          <Option
            active={active.includes(opt)}
            onClick={this.handleClick(opt)}
            key={i}>
            {opt}
          </Option>
        ))}
      </div>
    )
  }
}

export {
  SelectArea as default,
  SelectArea,
  Option,
}
