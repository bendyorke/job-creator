import data from 'data'

const initialSuggestions = {
  jobs: Object.keys(data.jobs),
  locations: data.locations,
  skills: [],
  benefits: [],
}

const suggestionsReducer = (state = initialSuggestions, action) => {
  switch(action.type) {
  case 'UPDATE_NEW_JOB':
    let title = action.payload.title

    if (!title) return state

    return {
      ...state,
      ...data.jobs[title],
    }

  default:
    return state
  }
}

export default suggestionsReducer
