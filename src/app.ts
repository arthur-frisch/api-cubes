import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.all('/*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Origin, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});
app.use(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.listen(port, () => {
  return console.log(`server is listening on port : ${port}`);
});
