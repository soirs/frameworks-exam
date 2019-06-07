import React, { Component } from 'react';

class SingleJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <div className="flex justify-center mt-10">
        {this.state.singleJob.map(job => (
          <div
            className="container w-full max-w-md bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 text-xl"
            key={job._id}
          >
            <p className="title">
              <span className="font-bold">Title:</span> <br />
              {job.title}
            </p>
            <p className="description">
              <span className="font-bold">Description:</span> <br />
              {job.description}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default SingleJob;
