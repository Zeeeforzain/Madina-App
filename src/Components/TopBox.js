import React from 'react';
import BoxComponent from './Box';
import Top from './Top';

export default function TopBox() {
  return (
    <BoxComponent
    display='flex'
    justifyContent='space-between'
    width='100%'
    >
      <Top heading="Top Campaigns"/>
      <Top heading="Top Charities"/>
      <Top heading="Top Countries"/>
    </BoxComponent>
  );
}
