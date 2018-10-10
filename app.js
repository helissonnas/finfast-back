const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const dbConnect = require('./config/database');

const expense = require('./src/expense');
const income = require('./src/income');
const type = require('./src/type');
const user = require('./src/user');


const PORT = process.env.PORT || 3000;
const ENVIRONMENT= process.env.ENVIRON || 'dev';

if (ENVIRONMENT === 'production') {
    app.use( cors() );
}

// connection to mongodb server.
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


app.listen(PORT, () => console.log(`Finfast is listening on port ${PORT} || Envirovment: ${ENVIRONMENT}`));