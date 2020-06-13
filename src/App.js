import React from 'react';
import logo from './logo.png';
import './App.css';
import GameContainer from './container/GameContainer';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <GameContainer />
    </div>
  );

}

export default App;
