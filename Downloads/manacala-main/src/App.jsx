import React from 'react';
import Header from './Components/Header';
import Board from './Components/Board';
import Scoreboard from './Components/Scoreboard';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Mancala Game</h1>
      <Scoreboard />
      <Board />
    </div>
  );
}

export default App;
