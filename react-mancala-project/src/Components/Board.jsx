import React from 'react';
import Pocket from './Pocket';

function Board() {
  return (
    <main>
      <div className="board">
        <div className="mancala-one"></div>
        <div className="side-one">
          {[...Array(6)].map((_, idx) => (
            <Pocket key={idx} />
          ))}
        </div>
        <div className="side-two">
          {[...Array(6)].map((_, idx) => (
            <Pocket key={idx + 6} />
          ))}
        </div>
        <div className="mancala-two"></div>
      </div>
    </main>
  );
}

export default Board;
