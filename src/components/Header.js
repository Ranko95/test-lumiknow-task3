import React from 'react';

function Header({ title, isin, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{isin}</p>
      <p>{description}</p>
      <hr/>
    </div>
  )
}

export default Header;
