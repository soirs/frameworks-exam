import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import locations from '../../data/locations';

class LocationPage extends Component {
  render() {
    const { category } = this.props.match.params;
    console.log(category + '');

    return (
      <div className="container p-4">
        <h1 className="text-center font-bold">Locations</h1>
        <br />
        {locations.map(location => (
          <div
            className="text-center max-w rounded overflow-hidden bg-teal-600 text-white mb-2"
            key={location.slug}
          >
            <div className="px-6 py-4">
              <Link
                to={`/jobs/${category}/${location.slug}/`}
                className="font-bold text-xl mb-2"
              >
                {location.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default LocationPage;
