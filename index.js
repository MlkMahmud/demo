const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.json({ message: `Current tag is: ${process.env.GIT_TAG}` });
}).listen(3000, () => console.log('running on port: 3000'));