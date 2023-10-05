import express from 'express';
import bikes from './data/data.json' assert { type: 'json' };

const app = express();
const port = 5500;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/bike', (req, res) => {
  const foundBike = bikes.find(b => b.id === req.query.id);
  res.send(foundBike);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});