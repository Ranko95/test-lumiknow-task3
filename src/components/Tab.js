import React from 'react';

function Tab({ name, handleClick }) {
  return (
    <button onClick={handleClick}>
      {name}
    </button>
  )
}

export default Tab;
