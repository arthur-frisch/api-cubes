import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  return console.log(`server is listening on port : ${port}`);
});
