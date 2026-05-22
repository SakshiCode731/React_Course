import React from "react";
import PropTypes from 'prop-types'


function Navbar(props) {
  return (
  <nav className="bg-gray-900 text-white px-4 py-3">
  <div className="container mx-auto flex items-center justify-between">
    
    {/* Logo */}
    <a href="/" className="text-2xl font-bold">
      {props.title}
    </a>

    {/* Navigation Links */}
    <ul className="flex gap-6">
      <li>
        <a href="/" className="hover:text-green-400">
         {props.aboutText}
        </a>
      </li>

      <li>
        <a href="/" className="hover:text-green-400">
          About
        </a>
      </li>
    </ul>

    {/* Search Form */}
    <form className="flex gap-2">
      <input
        type="search"
        placeholder="Search"
        className="rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white outline-none focus:border-green-400"
      />

      <button
        type="submit"
        className="rounded-md border border-green-500 px-4 py-2 text-green-400 hover:bg-green-500 hover:text-white"
      >
        Search
      </button>
    </form>

  </div>
</nav>
  )
}

Navbar.propTypes = {title :PropTypes.string,
                    aboutText: PropTypes.string
};

export default Navbar;
