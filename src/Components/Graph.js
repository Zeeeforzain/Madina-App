import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicArea() {
  return (
    <LineChart
      xAxis={[
        {
          data: [
            'January', 'February', 'March', 'April', 
            'May', 'June', 'July', 'August', 
            'September', 'October', 'November', 'December'
          ],
          label: 'Months',
          tick: {
            rotate: -45, 
            align: 'end',
          },
        },
      ]}
      series={[
        {
          data: [2, 50500, 20000, 803455, 1.5, 5, 200, 300, 400, 500, 600, 700], // Ensure this matches the x-axis
          area: true,
        },
      ]}
      width={500}
      height={300}
    />
  );
}
