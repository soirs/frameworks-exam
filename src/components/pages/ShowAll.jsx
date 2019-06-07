import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowAll extends Component {
  render() {
    return (
      <div>
      All Jobs
      {this.props.jobs.map(jobs => (
        <div
          className="text-center max-w rounded overflow-hidden bg-teal-600 text-white mb-2"
          key={jobs._id}
        >
          <div className="px-6 py-4">
            <Link
              to={`/jobs/${jobs.category}/${jobs.location}/${jobs._id}`}
              className="font-bold text-xl mb-2"
            >
              {jobs.title}
            </Link>
            <p>{jobs.description.substring(0,100)}...</p>
          </div>
        </div>
      ))}
      </div>
    );
  }
}

export default ShowAll;