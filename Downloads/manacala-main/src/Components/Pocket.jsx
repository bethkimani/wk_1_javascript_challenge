// Pocket.js
import React from 'react';

function Pocket({ active, pieces }) {
  // Log to verify the number of pieces in each render
  console.log(`Rendering pocket with ${pieces} pieces`);

  return (
    <div className={`pocket ${active ? 'active' : ''}`}>
      {[...Array(pieces)].map((_, idx) => (
        <div key={idx} className="piece"></div>
      ))}
    </div>
  );
}

export default Pocket;
