import './searchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  }
  return (
    <div className="search-bar">
      <form onSubmit = {handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} placeholder="Search" />
      </form>
    </div>
  )
}

export default SearchBar;
