import React from 'react';
import AppState from './context/AppState';
import Home from './Home';
import './App.css';

const App = () => {
  return (
    <AppState>
      <Home />
    </AppState>
  );
};

export default App;
