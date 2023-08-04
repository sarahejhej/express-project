const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send({
    id: 0,
    name: 'Ada Lovelace',
  });
});

app.get('/messages', (req, res) => {
  res.send('<ul><li>Hello all!</li></ul>');
});

app.post('/messages', (req, res) => {
  console.log('Updating messages...');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
