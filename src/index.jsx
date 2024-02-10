import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/App/App';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//FEELING REDUCER
function addFeeling(state = '', action) {
  if (action.type === 'ADD_FEELING') {
    return action.payload;
  }
  return state;
}

//UNDERSTANDING REDUCER
function addUnderstanding(state = '', action) {
  if (action.type === 'ADD_UNDERSTANDING') {
    return action.payload;
  }
  return state;
}

//SUPPORT REDUCER
function addSupport(state = '', action) {
  if (action.type === 'ADD_SUPPORTED') {
    return action.payload;
  }
  return state;
}

//SUPPORT COMMENTS
function addComment(state = '', action) {
  if (action.type === 'ADD_COMMENT') {
    return action.payload;
  }
  return state;
}

//COMBINE REVIEW
function combineReview(state = [], action) {
  if (action.type === 'COMBINE_REVIEW') {
    return action.payload;
  }
  return state;
}

const store = createStore(
  combineReducers({
    addFeeling,
    addUnderstanding,
    addSupport,
    addComment,
    combineReview,
  }),
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
