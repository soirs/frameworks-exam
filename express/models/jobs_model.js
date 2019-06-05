let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// JOB SCHEMA
let jobSchema = new Schema(
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
module.exports = mongoose.model('listings', jobSchema);
