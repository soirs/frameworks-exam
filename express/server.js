/**** External libraries ****/
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config()
/**** Configuration ****/
const appName = 'Frameworks Exam API';
const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json()); // Parse JSON from the request body
app.use(morgan('combined')); // Log all requests to the console
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));

/**** CONFIGURATION ****/
/***** MIDDLEWARE *****/

// Additional headers for the response to avoid trigger CORS security
// errors in the browser
// Read more here: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  // intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    // respond with 200
    // console.log('Allowing OPTIONS');
    res.sendStatus(200);
  } else {
    // move on
    next();
  }
});

/***** MIDDLEWARE *****/
/****** DATA *****/
