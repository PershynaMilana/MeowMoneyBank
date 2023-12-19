
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const sourceIncomeRoutes = require('./routes/routerSI')
const app = express();


const database = require('./database/databaseIndex')

database()

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: true }));

app.use('/api',userRoutes);
app.use('/api', sourceIncomeRoutes)


const port = 8080;
app.listen(port, () => {
  console.log(`The server is running on the port ${port}`);
});






