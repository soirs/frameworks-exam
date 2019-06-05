import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex justify-between p-2 items-center mb-2 mt-2 bg-teal-900 rounded-lg">
      <Link
        to="/"
        className="text-white text-sm p-2 md:p-4 md:text-xl uppercase font-bold hover:no-underline hover:text-green rounded hover:bg-green-200"
      >
        Job
        <span>
          <i className="font-thin">Market</i>
        </span>
      </Link>

      <ul className="list-reset flex">
        <li>
          <Link to="/NewListing" className="text-white text-sm p-2 md:p-4 hover:no-underline hover:text-green rounded hover:bg-green-200">
            New Job Listing
          </Link>
        </li>
        <li>
          <Link
            to="/Login"
            className="text-white bg-green-700 rounded p-2 md:p-4 text-sm hover:no-underline hover:text-green hover:bg-green-200"
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
