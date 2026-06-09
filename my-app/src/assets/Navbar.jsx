import React from "react";
import PropTypes from "prop-types";

function Navbar({ title = "TextUtils", aboutText = "About" }) {
  return (
    <nav className={`bg-${props.mode } text-${props.mode} px-4 py-3`}>
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          {props.mode}
        </a>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <a href="#" className="hover:text-green-400">
              {props.aboutText}
            </a>
          </li>

          <li>
           <button className="hover:text-green-400">
  About us
</button>
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
    className="rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white outline-none focus:border-green-400"
  />

  <button
    type="button"
    className="rounded-md border border-green-500 px-4 py-2 text-green-400 hover:bg-green-500 hover:text-white"
  >
    Search
  </button>
</form>

      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

export default Navbar;