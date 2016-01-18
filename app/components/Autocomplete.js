import React, { Component, PropTypes } from 'react'

class Autocomplete extends Component {
  static propTypes = {
    items: PropTypes.array,
    filter: PropTypes.func,
    sort: PropTypes.any,
    renderMenu: PropTypes.func,
    renderItem: PropTypes.func,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    children: PropTypes.element,
  };

  static defaultProps = {
    items: [],
    filter: (item, query) => item.toLowerCase().includes(query.toLowerCase()),
    sort: () => {},
    renderMenu: ({items}) => <ul>{items}</ul>,
    renderItem: ({item, highlighted}) =>
      <li>{highlighted ? <strong>{item}</strong> : item}</li>,
    children: <input type="text" />,
  };

  state = {
    open: false,
    highlighted: -1,
  };

  get items() {
    const { items, filter, sort } = this.props
    const { value = '' } = this.refs.input || {}

    return items
      .filter(item => filter(item, value))
      .sort(sort)
  }

  componentWillMount() {
    this._blur = true
  };

  open = () => {
    this.setState({open: true})
  };

  close = () => {
    this.setState({open: false})
  };

  // menu
  handleMouseLeave = _event => {
    this.setState({highlighted: -1})
  };

  // item
  handleMouseEnter = index => _event => {
    this.setState({highlighted: index})
  };

  // item
  handleMouseDown = () => {
    this._blur = false
  };

  // item
  handleSelect = item => event => {
    const { onSelect } = this.props
    const { input } = this.refs

    /**
     * If there is no onSelect, just update the value
     */
    const selectHandler = onSelect
      ? onSelect(item, event)
      : input.value = item

    /**
     * After updating the value, we need to trigger an onChange event.
     * Can also trigger by returning true in onSelect
     */
    if (selectHandler) {
      const changeEvent = new Event('input', { bubbles: true })
      input.dispatchEvent(changeEvent)
    }

    /**
     * Close the menu and allow blur events
     * to continue,
     */
    setTimeout(() => {
      input.focus()
      this._blur = true
      this.close()
    })
  };

  // children
  handleFocus = event => {
    const { onFocus } = this.props

    this.open()
    onFocus && onFocus(event)
  };

  // children
  handleBlur = event => {
    const { onBlur } = this.props

    if (!this._blur) return

    this.close()
    onBlur && onBlur(event)
  };

  // children
  handleKeyDown = event => {
    const { highlighted } = this.state

    this.open()

    switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      const next = Math.min(highlighted + 1, this.items.length - 1)
      this.setState({ highlighted: next })
      return

    case 'ArrowUp':
      event.preventDefault()
      const prev = Math.max(highlighted - 1, -1)
      this.setState({ highlighted: prev })
      return

    case 'Enter':
      event.preventDefault()
      if (highlighted > -1) {
        this.handleSelect(this.items[highlighted])(event)
      }
      return

    case 'Escape':
      this.close()
      return
    }
  };

  render() {
    const {
      children,
      items,
      filter,
      sort,
      renderMenu: Menu,
      renderItem: Item,
      ...props,
    } = this.props

    const renderedItems = this.items.map((item, index) => {
      const highlighted = this.state.highlighted === index
      return React.cloneElement(Item({item, index, highlighted}), {
        onMouseEnter: this.handleMouseEnter(index),
        onMouseDown: this.handleMouseDown,
        onClick: this.handleSelect(item),
        ref: `item-${index}`,
        key: index,
      })
    })

    const renderedMenu = React.cloneElement(Menu({items: renderedItems}), {
      onMouseLeave: this.handleMouseLeave,
    })

    return (
      <div {...props}>
        {React.cloneElement(children, {
          onKeyDown: this.handleKeyDown,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          ref: 'input',
        })}

        {this.state.open && renderedMenu}
      </div>
    )
  }
}

export default Autocomplete
