import React, { PropTypes, Component } from 'react'

import styles from 'css/SelectArea'

const Button = ({active, option}) => (
  <div className={styles[active ? 'activeOption' : 'inactiveOption']}>
    {option}
  </div>
)

class SelectArea extends Component {
  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    select: PropTypes.func,
    sort: PropTypes.any,
    renderOption: PropTypes.func,
    renderButton: PropTypes.func,
    children: PropTypes.element,
  };

  static defaultProps = {
    options: [],
    select: (opt, value) => value.includes(opt),
    sort: () => {},
    renderOption: option => <option value={option}>{option}</option>,
    renderButton: Button,
    children: <select multiple />,
  };

  get options() {
    const { options, sort } = this.props

    return options.sort(sort)
  }

  get value() {
    const value = [].filter
      .call(this.refs.select, opt => opt.selected)
      .map(opt => opt.value)

    console.log(JSON.stringify(value))
    return value
  };

  handleClick = option => event => {
    const { select } = this.props
    const value = this.value

    const nextValue = select(option, value)
      ? value.filter(v => v !== option)
      : [...value, option]
    this.refs.select.value = nextValue

    const changeEvent = new Event('input', {bubbles: true})
    this.refs.select.dispatchEvent(changeEvent)
  };

  render() {
    const {
      options,
      select,
      sort,
      renderOption,
      renderButton,
      children,
      className,
      ...props,
    } = this.props

    const value = this.value

    const renderedButtons = this.options.map((option, index) => {
      const active = select(option, value)
      return React.cloneElement(renderButton({option, active, index}), {
        onClick: this.handleClick(option),
        key: index,
      })
    })

    const renderedOptions = this.options.map((option, index) => {
      return React.cloneElement(renderOption(option), {
        key: index,
      })
    })

    return (
      <div className={`${styles.container} ${className}`} {...props}>
        {renderedButtons}
        {React.cloneElement(children, {
          ref: 'select',
        }, renderedOptions)}
      </div>
    )
  }
}

export {
  SelectArea as default,
  SelectArea,
  Option,
}
