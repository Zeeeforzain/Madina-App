import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
import InputComponent from './InputComponent';
import Dropdown from './Dropdown';

export default function NewsForm() {
    const category = [
        { value: 1, label: 'Latest News' },
        { value: 2, label: 'Pakistan' },
        { value: 3, label: 'International' },
        { value: 4, label: 'Sports' },
        { value: 5, label: 'Showbiz' },
        { value: 5, label: 'Business' },
        { value: 5, label: 'Health' },
        { value: 5, label: 'Science & Technology' },
        { value: 5, label: 'Interesting' },
        { value: 5, label: 'Zero Point' },
        { value: 5, label: 'Special Feature' },
      ];

  return (
    <BoxComponent
    border='1px solid green'
    width='60%'
    backgroundColor='var(--light)'
    display='flex'
    flexDirection='column'
    justifyContent='space-around'
    alignItems='center'
    >
      <TypographyComponent
      fontSize='30px'
      color='var(--dull)'
      fontFamily='var(--main)'
      fontWeight='600'
      >
        Add News
      </TypographyComponent>
      <InputComponent label='Heading'/>
      <InputComponent label='Description'/>
      <Dropdown label="Category" menuItems={category} />
    </BoxComponent>
  );
}
