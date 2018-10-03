const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const expense = require('./src/expense');
const income = require('./src/income');
const type = require('./src/type');
const user = require('./src/user');


const PORT = process.env.PORT || 3000;

// connection to mongodb server.
const dbConnect = require('./config/database');
dbConnect();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.use('/expense', expense);
app.use('/income', income);
app.use('/type', type);
app.use('/user', user);

monggose.connect('mongodb://localhost/test');

app.listen(PORT, () => console.log('Finfast is listening on port 3000!'));