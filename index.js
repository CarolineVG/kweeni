const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// load css and img
app.use(express.static('./public'));

// load routes
app.use('/', require('./routes/index') );

// start server
app.listen(port, () => console.log('Kweeni Server listening on port 3000!'));