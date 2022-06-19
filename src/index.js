import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import User from './model/User';
import Family from './model/Family';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.disable('x-powered-by');

app.use(function (_, res, next) {
  res.header('Content-Type', 'application/json');
  next();
});

app.listen(port, () => {
  console.log('finfast is running ⚡️');

  User.findAll({ include: Family }).then((result) =>
    console.log(JSON.stringify(result))
  );
});
