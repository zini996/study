const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('\nHello from Dockerized Node.js app!\n');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`App is running on port ${PORT}`);
});

