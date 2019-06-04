import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import categories from '../../data/categories';

class Frontpage extends Component {
  render() {
    return (
      <div className="container p-4">
        <h1>Categories</h1>
        <br />
        {categories.map(category => (
          <Link
            to={`/Jobs/${category.slug}`}
            className="text-black text-sm md:text-xl font-bold block mb-4"
          >
            {category.title}
          </Link>
        ))}
      </div>
    );
  }
}

export default Frontpage;
