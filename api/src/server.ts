import express from 'express';
import cors from 'cors';

const goods = [
  { id: 1, colorId: 1, name: 'Dumplings' },
  { id: 2, colorId: 2, name: 'Carrot' },
  { id: 3, colorId: 3, name: 'Eggs' },
  { id: 4, colorId: 1, name: 'Ice cream' },
  { id: 5, colorId: 2, name: 'Apple' },
  { id: 6, colorId: 3, name: 'Bread' },
  { id: 7, colorId: 1, name: 'Fish' },
  { id: 8, colorId: 2, name: 'Honey' },
  { id: 9, colorId: 3, name: 'Jam' },
  { id: 10, colorId: 1, name: 'Garlic' },
];

const colors = [
  { id: 1, name: 'red' },
  { id: 2, name: 'green' },
  { id: 3, name: 'blue' },
];

const app = express();

app.use(cors());

app.get('/goods', (req, res) => {
  res.send(goods);
})

app.get('/goods/:goodId', (req, res) => {
  const { goodId } = req.params;

  const foundGood = goods.find(good => good.id === +goodId);

  if (!foundGood) {
    res.sendStatus(404);
    return;
  }

  res.send(foundGood);
})

app.get('/colors', (req, res) => {
  res.send(colors);
})

app.get('/colors/:colorId', (req, res) => {
  const { colorId } = req.params;

  const foundColor = colors.find(color => color.id === +colorId);

  if (!foundColor) {
    res.sendStatus(404);
    return;
  }

  res.send(foundColor);
})

app.post('/goods', express.json(), (req, res) => {
  const { name, colorId } = req.body;
  const maxId = Math.max(...goods.map(good => good.id));

  if (!name || !colorId) {
    res.sendStatus(422);
    return;
  }

  const newGood = {
    id: maxId + 1,
    name,
    colorId,
  }

  goods.push(newGood);
  res.statusCode = 201;
  res.json(newGood);
})

app.listen(5000);
