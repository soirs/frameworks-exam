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

let options = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const timestamp = new Date().toLocaleTimeString('dk-Da', options);
const db = mongoURI;

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

// JOB SCHEMA
let jobSchema = new mongoose.Schema(
  {
    author: String,
    company: String,
    title: String,
    category: String,
    location: String,
    description: String,
    views: Number,
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);
const Jobs = mongoose.model('listings', jobSchema);

/****** DATA *****/
/**** ROUTES ****/
// GET
// GET
// GET
// GET
app.get('/api/jobs/', (req, res) => {
  Jobs.find({}, (err, jobs) => res.json(jobs));
});

app.get('/api/jobs/:category', (req, res) => {
  Jobs.find({}, (err, jobs) => res.json(jobs));
});

// POST
// POST
// POST
// POST
app.post('/api/jobs/', (req, res) => {
  let newJob = new Jobs({
    author: req.body.author,
    title: req.body.title,
    category: req.body.category,
    location: req.body.location,
    description: req.body.description,
    views: 1,
  });
  newJob
    .save()
    .then(result => {
      res.json({
        msg: `Hey! __${req.body.title}__, your job listing for >> ${
          req.body.title
        } << has been posted`,
      });
    })
    .catch(err => console.log(err));
});

/**** Reroute all unknown requests to the React index.html ****/
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/**** Start! ****/
app.listen(port, () => console.log(`${appName} running on port ${port}!`));
