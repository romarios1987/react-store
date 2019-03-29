import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './App';

import create from './store';
const store = create();


ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>
      , document.getElementById('root'));
