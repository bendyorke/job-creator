import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { editNewJob } from 'actions'

import Radio from 'components/Radio'
import Markdown from 'components/Markdown'
import NewJobForm from 'components/NewJobForm'
import styles from 'css/NewJob'

const REMOTE_LOC = 'Remote'

class NewJob extends Component {
  state = {
    skip: false,
    tab: 'editor',
  };

  static propTypes = {
    newJob: PropTypes.object,
    editNewJob: PropTypes.func,
  };

  handleRadio = skip => event => {
    this.setState({skip})
  };

  handleEdit = event => {
    this.props.editNewJob(event.target.value)
  };

  handleTabChange = tab => event => {
    this.setState({tab})
  };

  render() {
    const { skip, tab } = this.state
    const { newJob: { preview } } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.pageTitle}>Add new job</div>

        {/* Form */}
        <div className={styles[tab === 'editor' ? 'column' : 'inactiveColumn']}>
          <div className={styles.columnTitle} onClick={this.handleTabChange('editor')}>
            Use job ad creator to help create a job ad?
          </div>

          <div className={styles.columnMasthead}>
            <Radio
              className={styles.radio}
              active={!skip}
              onClick={this.handleRadio(false)}>
              Yes, use job ad creator
            </Radio>

            <Radio
              className={styles.radio}
              active={skip}
              onClick={this.handleRadio(true)}>
              No, I’ll create a job ad myself
            </Radio>
          </div>

          {skip
          ? <textarea className={styles.textarea} onChange={this.handleEdit}/>
          : <NewJobForm className={styles.form}/>
          }
        </div>

        {/* Preview */}
        <div className={styles[tab === 'preview' ? 'column' : 'inactiveColumn']}>
          <div className={styles.columnTitle} onClick={this.handleTabChange('preview')}>
            Preview of your job ad
          </div>

          <div className={styles.columnSubtitle}>
            Styles applied via
            <a href="#" className={styles.link}>markdown</a>
          </div>

          <Markdown className={styles.preview}>{`${preview}`}</Markdown>
          <div className={styles.button}>Publish your job</div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  newJob: state.newJob,
}), {
  editNewJob,
})(NewJob)
