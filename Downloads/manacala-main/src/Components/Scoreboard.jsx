import React from 'react';

function Scoreboard({ scoreOne, scoreTwo }) {
  return (
    <div id="scoreboard">
      <div id="scoreboard-one">
        <p>Player 1:</p>
        <p>{scoreOne}</p>
      </div>
      <div id="scoreboard-two">
        <p>Player 2:</p>
        <p>{scoreTwo}</p>
      </div>
    </div>
  );
}

export default Scoreboard;
