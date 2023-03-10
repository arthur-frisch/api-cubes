import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  return console.log(`server is listening on port : ${port}`);
});
