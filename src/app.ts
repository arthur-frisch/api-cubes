import { Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT;
type reqQuery = {
  query: {
    nb: number;
  };
};

app.get('/', async (req: reqQuery, res: Response) => {
  const parameter = req.query.nb;
  res.send(parameter);
});

app.listen(port, () => {
  return console.log(`server is listening on port : ${port}`);
});
