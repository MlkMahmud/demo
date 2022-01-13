const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.json({ message: 'What it do, baybee!!!' });
}).listen(3000, () => console.log('running on port: 3000'));