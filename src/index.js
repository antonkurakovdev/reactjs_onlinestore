import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import {rootReducer} from "./redux/rootReducer"

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ), 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
