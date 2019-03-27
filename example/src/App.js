import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Todos from './Todos';

export default () => (
  <Provider store={store}>
    <Todos />
  </Provider>
);
