import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addParamAC } from '../redux/action-creator';

function Dropdown({ options, defaultVal }) {

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { target } = e;
    dispatch(addParamAC((target.value)));
  }

  return (
    <select className="dropdown" defaultValue={defaultVal} onChange={handleChange}>
      {
        options.map(option => <option value={option.toLowerCase()} key={uuidv4()}>{option}</option>)
      }
    </select>
  )
}

export default Dropdown;
