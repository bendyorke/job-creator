import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import suggestions from 'reducers/suggestions'
import newJob from 'reducers/newJob'

export default combineReducers({
  suggestions,
  newJob,
  routing: routeReducer,
})
