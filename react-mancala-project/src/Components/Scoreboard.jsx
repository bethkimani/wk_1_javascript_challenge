import React, { useState } from 'react';

function Scoreboard() {
  const [scoreOne, setScoreOne] = useState(0);
  const [scoreTwo, setScoreTwo] = useState(0);

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
