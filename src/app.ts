import {Response, Request} from 'express';
import express from 'express';

const app = express();
const port = 3000;

type reqQuery = {
    query: {
        nb: number
    }
};


app.get('/', async (req : reqQuery, res : Response) =>  {
  const parameter = req.query.nb;
  res.send(parameter);
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});