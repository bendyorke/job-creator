import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateNewJob } from 'actions'

import Checkbox from 'components/Checkbox'
import TypeAhead from 'components/TypeAhead'
import SelectArea from 'components/SelectArea'
import styles from 'css/NewJobForm'

class NewJobForm extends Component {
  static propTypes = {
    newJob: PropTypes.object,
    suggestions: PropTypes.object,
    updateNewJob: PropTypes.func,
  };

  handleCheck = event => {
    this.setState({remote: !this.state.remote})
  };

  handleUpdate = key => event => {
    const value = event && event.target ? event.target.value : event
    this.props.updateNewJob({[key]: value})
  };

  render() {
    const {
      newJob: {
        title,
        location,
        remote,
      },
      suggestions,
    } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.rule} />
        <label className={styles.label}>Job title</label>

        <TypeAhead
          options={suggestions.jobs}
          className={styles.input}
          onChange={this.handleUpdate('title')}
          onOptionSelected={this.handleUpdate('title')} />

        <div className={styles.rule} />
        <label className={styles.label}>Location</label>

        <TypeAhead
          options={suggestions.locations}
          className={styles.input}
          onChange={this.handleUpdate('location')}
          onOptionSelected={this.handleUpdate('location')}
          inputProps={{disabled: remote}}/>

        <Checkbox
          className={styles.checkbox}
          active={remote}
          onClick={this.handleUpdate('remote').bind(this, !remote)}>
          This is a remote or telecommute job
        </Checkbox>

        <div className={styles.rule} />
        <label className={styles.label}>Choose the skills you consider to be essential</label>

        <SelectArea
          className={styles.select}
          options={suggestions.skills}
          onChange={this.handleUpdate('skills')}/>

        <div className={styles.rule} />
        <label className={styles.label}>What benefits do you offer?</label>

        <SelectArea
          className={styles.select}
          options={suggestions.benefits}
          onChange={this.handleUpdate('benefits')}/>

        <div className={styles.rule} />
        <label className={styles.label}>Describe your company</label>

        <textarea
          className={styles.textarea}
          placeholder="About your company"
          onChange={this.handleUpdate('about')}/>
      </div>
    )
  }
}

export default connect(state => ({
  newJob: state.newJob,
  suggestions: state.suggestions,
}), {
  updateNewJob,
})(NewJobForm)
