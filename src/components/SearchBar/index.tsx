import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './style.scss';
const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <BiSearch className="search-icon" />
      <input placeholder="Search for somethings here..." />
    </div>
  );
};

export default SearchBar;
