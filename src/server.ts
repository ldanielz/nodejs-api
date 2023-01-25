import express, { response } from 'express'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return response.json({ hello: 'world' });
})

app.listen(3000)
