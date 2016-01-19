import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateNewJob } from 'actions'

import {
  skills as allSkills,
  benefits as allBenefits,
} from 'data'

import Checkbox from 'components/Checkbox'
import TypeAhead from 'components/TypeAhead'
import SelectArea from 'components/SelectArea'
import QuickInput from 'components/QuickInput'
import Autocomplete from 'components/Autocomplete'
import styles from 'css/NewJobForm'

class NewJobForm extends Component {
  static propTypes = {
    newJob: PropTypes.object,
    suggestions: PropTypes.object,
    updateNewJob: PropTypes.func,
  };

  handleUpdate = key => event => {
    const value = event && event.target ? event.target.value : event
    this.props.updateNewJob({[key]: value})
  };

  render() {
    const {
      newJob: {
        title,
        locations,
        skills,
        benefits,
      },
      suggestions,
    } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.rule} />
        <label className={styles.label}>Job title</label>

        <Autocomplete items={suggestions.jobs}>
          <input value={title} onChange={this.handleUpdate('title')} />
        </Autocomplete>

        <div className={styles.rule} />
        <label className={styles.label}>Location</label>

        <QuickInput
          items={suggestions.locations}
          options={['Location of Office', 'Current Location', 'Remote']}
          value={Object.keys(locations)}
          onChange={this.handleUpdate('locations')} />

        <div className={styles.rule} />
        <label className={styles.label}>Choose the skills you consider to be essential</label>

        <QuickInput
          className={styles.select}
          items={allSkills}
          options={suggestions.skills}
          value={Object.keys(skills)}
          onChange={this.handleUpdate('skills')}/>

        <div className={styles.rule} />
        <label className={styles.label}>What benefits do you offer?</label>

        <QuickInput
          className={styles.select}
          items={allBenefits}
          options={suggestions.benefits}
          value={Object.keys(benefits)}
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
