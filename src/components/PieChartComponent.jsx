import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';
import { getRandomValue } from '../utils/getRandomValue';

const generateArray = (length = 10) => {
  return Array.from({ length }, (_, i) => ({
    value: getRandomValue(i),
    name: `Something ${i + 1}`,
  }));
};

const data1 = generateArray(5);
const data2 = generateArray();

export const PieChartComponent = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />
          <Pie
            data={data1}
            dataKey="value"
            outerRadius={100}
            fill="#8884d8"
            label
            animationDuration={3000}
          />
          <Pie
            data={data2}
            dataKey="value"
            outerRadius={200}
            fill="#82ca9d"
            innerRadius={150}
            label
            animationDuration={4000}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
