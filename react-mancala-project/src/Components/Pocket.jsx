import React, { useState } from 'react';

function Pocket() {
  const [stones, setStones] = useState(4); // Each pocket starts with 4 stones

  const handleClick = () => {
    // Logic to distribute stones can go here
  };

  return (
    <div className="pocket" onClick={handleClick}>
      {Array.from({ length: stones }).map((_, idx) => (
        <div key={idx} className="piece"></div>
      ))}
    </div>
  );
}

export default Pocket;
