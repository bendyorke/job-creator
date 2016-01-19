import React, { PropTypes, Component } from 'react'

import styles from 'css/SelectArea'

const Button = ({active, option}) => (
  <div className={styles[active ? 'activeButton' : 'inactiveButton']}>
    {option}
  </div>
)

class SelectArea extends Component {
  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    getValue: PropTypes.func,
    sort: PropTypes.any,
    renderOption: PropTypes.func,
    renderButton: PropTypes.func,
    value: PropTypes.array,
    onChange: PropTypes.func,
    children: PropTypes.element,
  };

  static defaultProps = {
    options: [],
    value: [],
    sort: () => {},
    getValue: option => option,
    renderOption: ({option, getValue}) => <option value={getValue(option)}>{option}</option>,
    renderButton: Button,
    children: <select />,
  };

  get options() {
    const { options, sort } = this.props

    return options.sort(sort)
  }

  get value() {
    const { input = {} } = this.refs || {}

    return [].filter
      .call(input.options || [], opt => opt.selected)
      .map(opt => opt.value)
  }

  handleClick = option => _event => {
    const { getValue, value, onChange } = this.props

    const nextValue = value.includes(getValue(option))
      ? value.filter(value => value !== getValue(option))
      : [...value, option]

    onChange && onChange(nextValue)
  };

  render() {
    const {
      options,
      sort,
      getValue,
      renderOption,
      renderButton,
      children,
      className,
      value,
      ...props,
    } = this.props

    const renderedButtons = this.options.map((option, index) => {
      const active = value.includes(getValue(option))
      return React.cloneElement(renderButton({option, active, index}), {
        onClick: this.handleClick(option),
        key: `${index}${Math.random()}`,
      })
    })

    const renderedOptions = this.options.map((option, index) => {
      return React.cloneElement(renderOption.call(this, {option, getValue}), {
        key: index,
      })
    })

    return (
      <div className={`${styles.container} ${className}`} {...props}>
        {renderedButtons}
        {React.cloneElement(children, {
          style: {visibility: 'hidden', height: 0, width: 0},
          multiple: true,
          ref: 'input',
          readOnly: true,
          value,
        }, renderedOptions)}
      </div>
    )
  }
}

export {
  SelectArea as default,
  SelectArea,
}
