import React from 'react';
import { useSelector } from 'react-redux';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Tabs from './Tabs';
import Dropdown from './Dropdown';

function Chart({ data }) {
  const { param } = useSelector(state => state);

  return ( 
    <div className="chart-container">
      <div className="chart-container__tabs">
        <Tabs tabNames={['Week', 'Month', 'Quater', 'Year', 'Max']} />
        <Dropdown options={['Price', 'Yeld', 'Spread']} defaultVal="price" />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data[param]}>
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;
