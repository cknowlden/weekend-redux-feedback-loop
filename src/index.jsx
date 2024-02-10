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
    //   const newFeeling = {
    //     ...action.payload,
    //   };

    //   return [...state, newFeeling];
    // }
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

const store = createStore(
  combineReducers({
    addFeeling,
    addUnderstanding,
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
