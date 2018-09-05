const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const expense = require('./src/expense');
const income = require('./src/income');
const investment = require('./src/investment');
const user = require('./src/user');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.use('/expense', expense);
app.use('/income', income);
app.use('/investment', investment);
app.use('/user', user);

app.listen(3000, () => console.log('Finfast is listening on port 3000!'));