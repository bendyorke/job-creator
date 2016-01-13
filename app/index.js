import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, useRouterHistory } from 'react-router'
import { syncHistory } from 'redux-simple-router'
import reducers from 'reducers'

/**
 * components for routes - if it gets too
 * long break it out into it's own file
 */
import Layout from 'components/Layout'

/**
 * redux-simple-router@^2.0.0 uses middleware
 * to maintain a unidirectional data flow
 */
const routerMiddleware = syncHistory(browserHistory)

/**
 * not doing anything fancy with the store, so it's
 * just one big function chain.
 */
const store = applyMiddleware(routerMiddleware)(createStore)(reducers)

/**
 * redux-simple-router needs access to the store
 */
routerMiddleware.syncHistoryToStore(store)

/**
 * Render app!
 */
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
