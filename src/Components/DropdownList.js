import React from 'react';
import BoxComponent from './Box';
import Dropdown from './Dropdown';

export default function DropdownList() {
    const year = [
        { value: 1, label: '2024' },
        { value: 2, label: '2023' },
        { value: 3, label: '2022' },
        { value: 4, label: '2021' },
        { value: 5, label: '2020' },
      ];
    
      const month = [
        { value: 1, label: 'January' },
        { value: 2, label: 'February' },
        { value: 3, label: 'March' },
        { value: 3, label: 'April' },
        { value: 5, label: 'May' },
        { value: 6, label: 'June' },
        { value: 7, label: 'July' },
        { value: 8, label: 'August' },
        { value: 9, label: 'September' },
        { value: 10, label: 'October' },
        { value: 11, label: 'November' },
        { value: 12, label: 'December' },
      ];
      const week = [
        { value: 1, label: 'First' },
        { value: 2, label: 'Second' },
        { value: 3, label: 'Third' },
        { value: 4, label: 'Fourth' },
      ];

  return (
    <BoxComponent
    display='flex'
    justifyContent='space-between'
    alignItems='center'
    border='1px solid green'
    margin='50px'
    >
      <Dropdown label="Year" menuItems={year} />
      <Dropdown label="Month" menuItems={month} />
      <Dropdown label="Week" menuItems={week} />
    </BoxComponent>
  );
}
