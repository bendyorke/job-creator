const convertToMarkdown = ({
  title = '',
  location = '',
  about = '',
  remote = false,
  skills = [],
  benefits = [],
}) => `
##### ${title}
###### ${remote ? 'Remote' : location}

${about}

${skills.length ? 'Skills Required:' : ''}
${skills.map(s => "\n- " + s).join('')}

${benefits.length ? 'Benefits:' : ''}
${benefits.map(b => "\n- " + b).join('')}
`

const initialNewJob = {
  preview: convertToMarkdown({}),
}

const newJobReducer = (state = initialNewJob, action) => {
  switch(action.type) {

  case 'UPDATE_NEW_JOB':
    let newState = {...state, ...action.payload}

    let newMarkdown = convertToMarkdown(newState)

    return {...newState, preview: newMarkdown}

  case 'EDIT_NEW_JOB':
    return {...state, preview: action.payload}

  default:
    return state
  }
}

export default newJobReducer
