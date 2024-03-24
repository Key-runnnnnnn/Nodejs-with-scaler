const express = require('express');
const app = express();

app.use(express.json())

const category = [
  {id: 1, name: 'web'},
  {id: 2, name: 'mobile'},
  {id: 3, name: 'network'}
]

app.get('/api/categories', (req, res) => {
  res.send(category);
})

app.post('/api/categories', (req, res) => {
  const cat = {
    id: category.length + 1,
    name: req.body.name
  }
  category.push(cat);
  res.send(cat);
})

app.put('/api/categories/:id', (req, res) => {
  const cat = category.find(c => c.id === parseInt(req.params.id));
  if(!cat) return res.status(404).send('The category with the given ID was not found');
  if(err) return res.status(400).send(err.details[0].message);
  cat.name = req.body.name;
  res.send(cat);
})

app.delete('/api/categories/:id', (req, res) => {
  const cat = category.find(c => c.id === parseInt(req.params.id));
  if(!cat) return res.status(404).send('The category with the given ID was not found');
  const index = category.indexOf(cat);
  category.splice(index, 1);
  res.send(cat);
})

app.get('/api/categories/:id', (req, res) => {
  const cat = category.find(c => c.id === parseInt(req.params.id));
  if(!cat) return res.status(404).send('The category with the given ID was not found');
  res.send(cat);
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
})