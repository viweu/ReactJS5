import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import Theme from './components/Theme'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Theme />
      </Provider>
    </div>
  );
}

export default App;
