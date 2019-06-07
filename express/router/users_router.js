module.exports = users => {
  const express = require('express');
  const router = express.Router();
  const jwt = require('jsonwebtoken');
  const bcrypt = require('bcrypt');
  let User = require('../models/users_model');

  // Working on frontend
  router.post('/users', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let hashed = 'superValue';

    // Takes 3 parameters
    // 1: what to encrypt
    // 2: salt.. length?
    // 3: callback - what to do with this
    bcrypt.hash(password, 10, (err, hash) => {
      hashed = hash;

      // make a simple .save operation as normal
      // createdAt and updatedAt is already added in the model
      let newUser = new User({
        username: username,
        password: hashed,
      });
      console.log(' ');
      console.log('  --');
      console.log(newUser);
      newUser
        .save()
        .then(result => {
          res.json({
            msg: `SUCCESS`,
          });
        })
        .catch(err => console.log(err));
      console.log(`Hash generated for the ${username}`, username);
    });
    // TODO: Implement user account creation
    // Done in Postman
    // res.status(501).json({ msg: 'POST new user not implemented' });
  });

  // router.put('/', (req, res) => {
  //     // TODO: Implement user update (change password, etc).
  //     res.status(501).json({msg: "PUT update user not implemented"});
  // });

  // The check
  // The check
  // The check
  // The check
  // The check
  router.post('/users/authenticate', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
      let msg = 'Username or password missing!';
      console.error(msg);
      res.status(401).json({ msg: msg });
      return;
    }
    // const user = users.find(user => user.username === username);
    User.findOne({ username: username }).exec((err, user) => {
      console.log(user);

      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          console.log(user.password);
          if (result) {
            const payload = {
              username: username,
              admin: false,
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
              expiresIn: '1h',
            });

            res.json({
              msg: 'User authenticated successfully',
              token: token,
            });
          } else res.status(401).json({ msg: 'Password mismatch!' });
        });
      } else {
        res.status(404).json({ msg: 'User not found!' });
      }
    });
  });

  return router;
};
