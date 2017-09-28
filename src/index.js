import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import reducer from "./redux/reducers/auth";

import App from './main/App';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
, document.getElementById('root'));
