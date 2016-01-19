import React, { Component, PropTypes } from 'react'

import SelectArea from 'components/SelectArea'
import Autocomplete from 'components/Autocomplete'

import styles from 'css/QuickInput'

class QuickInput extends Component {
  static propTypes = {
    items: PropTypes.array,
    options: PropTypes.array,
    value: PropTypes.array,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    mergeOptionsAndValues: PropTypes.bool,
  };

  static defaultProps = {
    mergeOptionsAndValues: true,
    placeholder: 'Other...',
  };

  handleSelectItem = item => {
    const { onChange, value } = this.props
    this.refs.autocomplete.input.value = ''
    onChange && onChange([...value, item])
  };

  render() {
    const {
      items,
      options,
      value,
      onChange,
      mergeOptionsAndValues,
      placeholder,
      ...props,
    } = this.props

    const allOptions = mergeOptionsAndValues
      ? [...options, ...value.filter(x => !options.includes(x))]
      : options
    console.log(allOptions)

    return (
      <div className={styles.quickInput} {...props}>
        <Autocomplete
          className={styles.autocomplete}
          ref="autocomplete"
          items={items}
          limit={5}
          onSelectItem={this.handleSelectItem} >
          <input placeholder={placeholder} />
        </Autocomplete>

        <SelectArea
          className={styles.selectArea}
          options={allOptions}
          value={value}
          onChange={onChange} />
      </div>
    )
  }
}

export default QuickInput
