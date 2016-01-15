import { spin } from 'utils/spin'

export function updateNewJob(updates) {
  const payload = Object.entries(updates).reduce((memo, [key, value]) => {
    let spunValue = value.constructor === Array ? value.map(spin) : value
    return {...memo, [key]: spunValue}
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
