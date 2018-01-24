import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app';
import reducers from './reducers';
import Async from './middlewares/async'

/*const createStoreWithMiddleware = applyMiddleware()(createStore);*/

const store = createStore(reducers, composeWithDevTools(applyMiddleware(Async)));

ReactDOM.render(
  /*<Provider store={createStoreWithMiddleware(reducers)}>*/
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
