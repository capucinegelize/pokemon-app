// backend/database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, team TEXT)");
  db.run("CREATE TABLE pokemon (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, hp INTEGER, attack INTEGER)");
  db.run("CREATE TABLE move (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, type TEXT, power INTEGER)");
});

module.exports = db;
