module.exports = () => {
  let express = require('express');
  let router = express.Router();
  let Jobs = require('../models/jobs_model');

  const capitalize = val => {
    if (typeof val !== 'string') val = '';
    return val.charAt(0).toUpperCase() + val.substring(1);
  };

  // GET
  router.get('/', (req, res) => {
    Jobs.find({}, (err, jobs) => res.json(jobs));
  });
  router.get('/:category/', (req, res) => {
    Jobs.find(
      {
        category: capitalize(req.params.category),
      },
      (err, jobs) => {
        res.json(jobs);
      }
    ).sort('createdAt');
  });

  router.get('/:category/:location', (req, res) => {
    Jobs.find(
      {
        category: capitalize(req.params.category),
        location: capitalize(req.params.location),
      },
      (err, jobs) => res.json(jobs)
    ).sort('createdAt');
  });

  router.get('/:category/:id', (req, res) => {
    Jobs.find(
      {
        _id: req.params.id,
      },
      (err, jobs) => {
        res.json(jobs);
      }
    );
  });

  // POST
  router.post('/', (req, res) => {
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
  return router;
};
