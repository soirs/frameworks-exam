import React, { Component } from 'react';

class SingleJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      singleJob: [],
    };
  }

  componentDidMount() {
    this.getJob();
  }

  getJob() {
    const { category, location, id } = this.props.match.params;
    const URL = `${
      process.env.REACT_APP_API_JOBS
    }${category}/${location}/${id}`;
    fetch(URL, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(URL);
        this.setState({ singleJob: data });
      })
      .catch(error => {
        console.error('Error when fetching job: ', error);
      });
  }

  render() {
    return (
      <div>
        {this.state.singleJob.map(job => (
          <div className="container" key={job._id}>
            <p className="title">Title: {job.title}</p>
            <p className="description">Description: {job.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default SingleJob;
