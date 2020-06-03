import React from 'react';
import Tab from './Tab';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPeriodAC } from '../redux/action-creator';

function Tabs({ tabNames }) {

  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { target } = e;
    dispatch(addPeriodAC(target.innerText.toLowerCase()));
  }

  return (
    <div className="tabs">
      {
        tabNames.map(name => <Tab key={uuidv4()} name={name} handleClick={handleClick}/>)
      }
    </div>
  )
}

export default Tabs;
