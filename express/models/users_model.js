let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// JOB SCHEMA
let userSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);
module.exports = mongoose.model('users', userSchema);
