import React from 'react';

function Search() {
  return (
    <form className="search">
      <input type="text" placeholder="Enter ISIN..." />
      <button type="submit">Search</button>
    </form>
  )
}

export default Search;
