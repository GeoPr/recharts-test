import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    green: 4000,
    purple: 2400,
  },
  {
    name: 'Page B',
    green: 3000,
    purple: 1398,
  },
  {
    name: 'Page C',
    green: 2000,
    purple: 9800,
  },
  {
    name: 'Page D',
    green: 2780,
    purple: 3908,
  },
  {
    name: 'Page E',
    green: 1890,
    purple: 4800,
  },
  {
    name: 'Page F',
    green: 2390,
    purple: 3800,
  },
  {
    name: 'Page G',
    green: 3490,
    purple: 4300,
  },
];
export const LineChartComponent = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          {/* grid */}
          {/* <CartesianGrid strokeDasharray="3 3" /> */}

          <XAxis dataKey="name" />
          <YAxis />

          {/* floating window with information */}
          <Tooltip />

          {/* info about line`s color under the schedule */}
          {/* <Legend /> */}

          <Line
            type="monotone"
            dataKey="purple"
            stroke="#8884d8"
            activeDot={{ r: 10 }}
            animationDuration={4000}
          />
          <Line
            type="monotone"
            dataKey="green"
            stroke="#82ca9d"
            activeDot={{ r: 5 }}
            animationDuration={3000}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
