import express, { response } from 'express'
import { createCourse } from './routes';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  createCourse
  return res.json({ hello: 'world' });
})

app.listen(3000)
