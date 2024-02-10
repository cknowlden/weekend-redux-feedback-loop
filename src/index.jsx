import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/App/App';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

function addFeedback(
  state = [{ feeling: '', understanding: '', support: '', comments: '' }],
  action
) {
  if (action.type === 'FEEDBACK_LIST_ADD') {
    // const id = state.length;
    const newFeedback = {
      // id,
      ...action.payload,
    };

    return [...state, newFeedback];
  }
  return state;
}

const store = createStore(
  combineReducers({
    addFeedback,
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
