// backend/server.js
const express = require('express');
const db = require('./database');

const app = express();
app.use(express.json());

// Route pour créer un utilisateur
app.post('/api/user', (req, res) => {
  const { username, password, team } = req.body;
  db.run('INSERT INTO user (username, password, team) VALUES (?, ?, ?)', [username, password, team], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
});

// Route pour récupérer une équipe de Pokémon
app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  db.get('SELECT team FROM user WHERE id = ?', [userId], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ team: row.team });
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
