const convertToMarkdown = ({
  title = '',
  locations = {},
  about = '',
  remote = false,
  skills = {},
  benefits = {},
}) => `
##### ${title}
###### ${Object.values(locations).join(' | ')}

${about}

${Object.values(skills).length ? 'Skills Required:' : ''}
${Object.values(skills).map(s => '\n- ' + s).join('')}

${Object.values(benefits).length ? 'Benefits:' : ''}
${Object.values(benefits).map(b => '\n- ' + b).join('')}
`

const initialNewJob = {
  skills: {},
  benefits: {},
  locations: {},
  preview: convertToMarkdown({}),
}

const newJobReducer = (state = initialNewJob, action) => {
  switch (action.type) {

  case 'UPDATE_NEW_JOB':
    let newState = {
      ...state,
      ...Object.entries(action.payload).reduce((memo, [key, descriptor]) => {
        let value = descriptor.constructor === Array
          ? descriptor.reduce((memo, [acc, val]) => ({ ...memo, [acc]: state[key][acc] || val }), {})
          : descriptor

        return {...memo, [key]: value}
      }, {}),
    }

    let newMarkdown = convertToMarkdown(newState)

    return {...newState, preview: newMarkdown}

  case 'EDIT_NEW_JOB':
    return {...state, preview: action.payload}

  default:
    return state
  }
}

export default newJobReducer
