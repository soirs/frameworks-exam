import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex justify-between p-4 items-center mb-2 mt-2 bg-teal-900 rounded-lg">
      <Link
        to="/"
        className="text-white text-sm md:text-xl uppercase font-bold"
      >
        Job
        <span>
          <i className="font-thin">Market</i>
        </span>
      </Link>

      <ul className="list-reset flex">
        <li>
          <Link to="./NewListing" className="text-white text-sm p-2 md:p-4">
            New Job Listing
          </Link>
        </li>
        <li>
          <Link
            to="./Login"
            className="text-white p-2 md:p-4 text-sm font-bold uppercase"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
