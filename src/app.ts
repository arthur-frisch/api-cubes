import { Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();
const app = express();
type reqQuery = {
  query: {
    nb: number;
  };
};

app.get('/', async (req: reqQuery, res: Response) => {
  bcrypt.hash('testtest', 10).then(hash => console.log(hash));
  const parameter = req.query.nb;
  res.send(parameter);
});

app.listen(process.env.PORT, () => {
  return console.log(`server is listening on port : ${process.env.PORT}`);
});
