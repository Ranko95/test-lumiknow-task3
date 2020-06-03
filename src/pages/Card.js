import React from 'react';
import Header from '../components/Header';
import Chart from '../components/Chart';
import Search from '../components/Search';
import { useSelector } from 'react-redux';

function Card() {
  const { title, isin, description } = useSelector(state => state.bond);
  const data = useSelector(state => {
    switch (state.period) {
      case 'week':
        return state.bond.data.weekData;
      
      case 'month':
        return state.bond.data.monthData;
      
      case 'quater':
        return state.bond.data.quaterData;

      case 'year':
        return state.bond.data.yearData;

      default:
        break;
    }
  })
  return (
    <div className="card">
      <Search />
      <Header title={title} isin={isin} description={description} />
      <Chart data={data} />
    </div>
  )
}

export default Card;
