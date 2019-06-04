import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import locations from '../../data/locations';

class CategoryPage extends Component {
  render() {
    return (
      <div className="container p-4">
        <h1>Locations</h1>
        <br />
        {this.props.parent}
        {locations.map(location => (
          <Link
            to={`/Jobs/${location.slug}/`}
            className="text-black text-sm md:text-xl font-bold block mb-4"
          >
            {location.title}
          </Link>
        ))}
      </div>
    );
  }
}

export default CategoryPage;
