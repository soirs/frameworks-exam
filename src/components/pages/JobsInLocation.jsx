import React, { Component } from 'react';
// import locations from '../../data/locations';

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
    console.log(category + ' ' + location);
    // // const filterJobs = this.props.jobs.filter((value, index, array) => {
    //   return value;
    // });
    // console.log(filterJobs);
    console.log(this.state.jobs);
    return (
      <div>
        <h1>
          Current {category} jobs in {location}
        </h1>
        {this.state.jobs.map(jobs => (
          <p>{jobs.title}</p>
        ))}
      </div>
    );
  }
}

export default JobsInLocation;
