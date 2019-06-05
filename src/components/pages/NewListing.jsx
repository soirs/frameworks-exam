import React, { Component } from 'react';
// Used to make the dropdowns
import Select from 'react-select';

// For category dropdown
const categoryOptions = [
  { value: 'it', label: 'IT' },
  { value: 'law', label: 'Law' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'sales', label: 'Sales' },
];
// For location dropdown
const locationOptions = [
  { value: 'hovedstaden', label: 'Hovedstaden' },
  { value: 'midtjylland', label: 'Midtjylland' },
  { value: 'syddanmark', label: 'Syddanmark' },
  { value: 'nordjylland', label: 'Nordjylland' },
  { value: 'sjaelland', label: 'Sjælland' },
];

class NewListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: '',
      title: '',
      category: '',
      location: '',
      description: '',
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    // this.onChangeCategory = this.onChangeCategory.bind(this);
    // this.onChangeLocation = this.onChangeLocation.bind(this);

    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  // onChangeCategory(event) {
  //   this.setState({ category: event.target.value });
  // }
  // onChangeLocation(event) {
  //   this.setState({ location: event.target.value });
  // }
  onChangeCategory = category => {
    this.setState({ category });
    console.log(`Category selected:`, category);
  };
  onChangeLocation = location => {
    this.setState({ location });
    console.log(`Location selected:`, location);
  };

  onChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  PublishJobListing(slug, title, category, location, description) {
    let newJob = {
      author: 'Danske Bank',
      slug: slug,
      title: title,
      category: category.label,
      location: location.label,
      description: description,
    };

    console.log(newJob);
    const URL = process.env.REACT_APP_API_JOBS;
    console.log(URL);

    fetch(URL, {
      method: 'POST',
      body: JSON.stringify(newJob),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => {
        this.setState({ slug: '' });
        this.setState({ author: '' });
        this.setState({ title: '' });
        this.setState({ category: '' });
        this.setState({ location: '' });
        this.setState({ description: '' });
        // this.setState({ isPublished: true });
        // return this.props.getAnswers();
      })
      .catch(error => {
        console.error('Error when adding answer: ', error);
      });
  }

  // SUBMIT
  handleSubmit(event) {
    event.preventDefault();
    const { slug, title, category, location, description } = this.state;
    this.PublishJobListing(slug, title, category, location, description);
  }

  render() {
    return (
      <div className="flex justify-center bg-cover rounded p-8">
        <form className="w-full max-w-lg">
          <h1 className="block w-full text-center text-grey-darkest text-xl mb-12">
            Add new listing
          </h1>
          {/* JOB TITLE */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Job Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="e.g. Carpenter"
                onChange={this.onChangeTitle}
                value={this.state.title}
              />
            </div>
          </div>

          {/* CATEGORY */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-category"
              >
                Category
              </label>
              <div className="relative">
                <Select
                  id="grid-category"
                  searchable={false}
                  onChange={this.onChangeCategory}
                  value={this.state.category}
                  options={categoryOptions}
                />
              </div>
            </div>
            {/* LOCATION */}
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-location"
              >
                Location
              </label>
              <div className="relative">
                <Select
                  id="grid-location"
                  searchable={false}
                  onChange={this.onChangeLocation}
                  value={this.state.location}
                  options={locationOptions}
                />
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Job Description
              </label>
              <textarea
                id="description"
                placeholder="Add generic text about the listing"
                className="resize w-full bg-gray-200   focus:outline-none focus:shadow-outline focus:border-gray-500 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white"
                onChange={this.onChangeDescription}
                value={this.state.description}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={this.handleSubmit}
              disabled={!this.state.description}
            >
              Publish new job listing
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewListing;
