const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');


const app = express();

// setting
app.set('port', process.env.PORT || 4000);

// middleware
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, '../client/build')));



// routes
app.use('/api', require('./routes/index'));
app.get('*', (req, res) => res.sendFile(path.resolve('client', 'build', 'index.html')));


module.exports = app;
