import { Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import sql from 'mssql/msnodesqlv8';

dotenv.config();
const app = express();
const port = process.env.PORT;
const config = {
  server: process.env.SERVER ?? '',
  database: process.env.DATABASE ?? '',
  driver: process.env.DRIVER ?? '',
  options: {
    trustedConnection: true,
  },
};
type reqQuery = {
  query: {
    nb: number;
  };
};

app.get('/', async (req: reqQuery, res: Response) => {
  sql.connect(config, function (err) {
    if (err) {
      console.log(err);
    }
    const request = new sql.Request();
    request.query('select * from [Logs]', (err, records) => {
      if (err) console.log(err);
      else console.log(records);
    });
  });
  const parameter = req.query.nb;
  res.send(parameter);
});

app.listen(port, () => {
  return console.log(`server is listening on port : ${port}`);
});
