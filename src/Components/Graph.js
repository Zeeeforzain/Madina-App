import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Graph() {
  return (
    <LineChart
      xAxis={[
        {
          data: [1,2,3,4,5,6,7,8,9],
        },
      ]}
      series={[
        {
          data: [2546, 50500, 20040, 8455, 1500, 55464, 20056, 300, 4600], // Ensure this matches the x-axis
          area: true,
        },
      ]}
      width={650}
      height={500}
    />
  );
}
