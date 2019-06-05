/**** External libraries ****/
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
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

const mongoURI = process.env.MONGO_URI;
const db = mongoURI;

let options = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const timestamp = new Date().toLocaleTimeString('dk-Da', options);

mongoose
  .connect(db, {
    dbName: 'jobmarket',
    useNewUrlParser: true,
  })
  .then(() =>
    console.log(
      `${'\n'}🕒  ${timestamp} 🕒 ${'\n'}✅ ✅ ✅  WERE LIVE! MongoDB SUCCESSFULLY CONNECTED ${'\n'}`
    )
  )
  .catch(err => console.error(`${'\n'}❌ ❌ ❌  CONNECTION ERROR: `, err));

/****** DATA *****/
/**** ROUTES ****/

let jobsRouter = require('./router/jobs_router')(app);
app.use('/api/jobs', jobsRouter);

/**** Reroute all unknown requests to the React index.html ****/
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/**** Start! ****/
app.listen(port, () => console.log(`${appName} running on port ${port}!`));
