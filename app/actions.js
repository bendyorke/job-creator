import { spin } from 'utils/spin'

export function updateNewJob(updates) {
  const payload = Object.entries(updates).reduce((memo, [key, value]) => {
    let descriptor = value.constructor === Array
      ? value.map(v => [v, spin(v)])
      : value
    return {...memo, [key]: descriptor}
  }, {})

  return {
    type: 'UPDATE_NEW_JOB',
    payload,
  }
}

export function editNewJob(newJob) {
  return {
    type: 'EDIT_NEW_JOB',
    payload: newJob,
  }
}
