import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import categories from '../../data/categories';

class Frontpage extends Component {
  render() {
    return (
      <div className="container p-4">
        <h1 className="text-center font-bold">Categories</h1>
        <br />
        {categories.map(category => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
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
      </div>
    );
  }
}

export default Frontpage;
