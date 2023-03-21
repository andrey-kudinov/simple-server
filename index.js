const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.send('Received data');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
