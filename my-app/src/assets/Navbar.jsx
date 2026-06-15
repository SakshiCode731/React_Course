import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
 const isDark = props.mode === 'dark';
  const navBg = isDark ? 'bg-gray-800' : 'bg-white';
  const navText = isDark ? 'text-white' : 'text-black';
  return (
    <nav className={`${navBg} ${navText} px-4 py-3`}>
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="#" className="text-2xl font-bold">
          {props.title}
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <Link to="#" className="hover:text-green-400">
              {props.aboutText}
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-green-400">
              About us
            </Link>
          </li>
        </ul>

        {/* Search Form */}
        <form
          className="flex gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="search"
            placeholder="Search"
            className={`rounded-md border px-3 py-2 outline-none focus:border-green-400 ${isDark ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-black'
              }`}
          />

          <button
            type="button"
            className="rounded-md border border-green-500 px-4 py-2 text-green-400 hover:bg-green-500 hover:text-white"
          >
            Search
          </button>
        </form>

    <div className="flex items-center gap-2">
  <input
    type="checkbox"
    id="darkMode"
    onChange={props.toggleMode}
  />
  <label htmlFor="darkMode">
    Dark Mode
  </label>
</div>

 

      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

export default Navbar;