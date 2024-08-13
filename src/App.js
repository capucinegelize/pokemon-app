// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TeamBuilder from './components/TeamBuilder';
import BattleArena from './components/BattleArena';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/team-builder" element={<TeamBuilder />} />
        <Route path="/battle-arena" element={<BattleArena team/>} />
      </Routes>
    </Router>
  );
}

export default App;