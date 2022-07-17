import React from 'react';
import { BiSearch } from 'react-icons/bi';
import './style.scss';

interface SearchBarProps {
  placeholder: string;
}
const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <div className="search-bar-container">
      <BiSearch className="search-icon" />
      <input placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
