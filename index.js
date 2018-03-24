const express = require('express');
const app = express();

const path = require('path');

const pug = require('pug');
var port = process.env.PORT || 3000; //lets the port be set by Heroku

// load pug 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// load css and img
app.use(express.static(__dirname + '/public'));

// load routes
app.use('/', require('./routes/index') );

// start server
app.listen(process.env.PORT || 3000, () => console.log('Kweeni Server listening on port 3000!'));