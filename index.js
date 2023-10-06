import express from 'express';
import bikes from './data/data.json' assert { type: 'json' };

const app = express();
const port = 5500;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('bikes', { bikes });
});

app.get('/bike', (req, res) => {
  const bike = bikes.find(b => b.id === req.query.id);
  return res.render('overview', { bike });
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});