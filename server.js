'use strict';

const express = require('express');
const app = express();
const port = 4500;


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, index.html));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
