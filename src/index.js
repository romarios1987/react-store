import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';



import App from './App';

import create from './store';
const store = create();


// setTimeout(() => {
//     store.dispatch({
//       type: 'SET_BOOKS',
//       payload: [
//         {id:0, title: 'hello World'}
//       ]
//     })
// }, 3000);

ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>
      , document.getElementById('root'));
