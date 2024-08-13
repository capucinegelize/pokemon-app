// src/components/BattleArena.js
import React from 'react';

const BattleArena = ({ team }) => {
  const fight = () => {
    // Simuler un combat
    const winner = Math.floor(Math.random() * team.length);
    alert(`Le gagnant est ${team[winner].name}!`);
  };

  return (
    <div>
      <h1>Arène de Combat</h1>
      <button onClick={fight}>Commencer le combat</button>
    </div>
  );
};

export default BattleArena;
