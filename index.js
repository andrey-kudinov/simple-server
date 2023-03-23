const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.send('Received data');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
