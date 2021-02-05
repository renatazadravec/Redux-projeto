import React from 'react'
import { Provider } from 'react-redux';

import './app.css'

import store from './store';
import CorList from './components/corList.js';

function App() {
  return (
    <Provider store={store}>
      <CorList />
    </Provider>
  );
}

export default App;
