import React, { Component } from 'react';
// import locations from '../../data/locations';
import { Link } from 'react-router-dom';

class JobsInLocation extends Component {
  state = {
    isLoggedIn: false,
    jobs: [],
  };

  componentDidMount(props) {
    this.fetchJobs();
  }

  fetchJobs() {
    const { category, location } = this.props.match.params;
    const URL = process.env.REACT_APP_API_JOBS;
    fetch(`${URL}/${category}/${location}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ jobs: data });
        console.log(data);
      })
      .catch(error => {
        console.error('Error when fetching jobs: ', error);
      });
  }
  render() {
    const { category, location } = this.props.match.params;
    return (
      <div>
        <h1>
          Current {category} jobs in {location}
        </h1>
        {this.state.jobs.map(jobs => (
          <div
            className="text-center max-w rounded overflow-hidden bg-teal-600 text-white mb-2 rounded"
            key={jobs._id}
          >
            <div className="px-6 py-4">
              <Link
                to={`/jobs/${category}/${location}/${jobs._id}`}
                className="font-bold text-xl mb-2"
              >
                {jobs.title}
              </Link>
              <p>{jobs.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default JobsInLocation;
