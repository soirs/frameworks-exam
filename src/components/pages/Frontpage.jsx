import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import categories from '../../data/categories';

class Frontpage extends Component {
  render() {
    return (
      <div className="container p-4 center">
        <h1 className="text-center font-bold">Categories</h1>
        <br />
        {categories.map(category => (
          <div
            className="text-center max-w rounded overflow-hidden bg-teal-600 text-white mb-2"
            key={category.slug}
          >
            <div className="px-6 py-4">
              <Link
                to={`/jobs/${category.slug}/`}
                className="font-bold text-xl mb-2"
              >
                {category.title}
              </Link>
            </div>
          </div>
        ))}
        <div className="px-6 text-center py-4">
        <Link
          to={`/show-all`}
          className="font-bold text-center text-xl mb-2"
        >
      Show All
        </Link>
      </div>
      </div>
    );
  }
}

export default Frontpage;
