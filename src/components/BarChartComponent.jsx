import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { getRandomValue } from '../utils/getRandomValue';

const data = Array.from({ length: 20 }, (_, i) => ({
  value: getRandomValue(i),
  name: `Something ${i + 1}`,
}));

export const BarChartComponent = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="rgba(106, 110, 229)"
            animationDuration={3000}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
