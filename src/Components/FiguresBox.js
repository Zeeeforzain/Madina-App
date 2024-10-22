import React from 'react';
import BoxComponent from './Box';
import Figures from './Figures';

export default function FiguresBox() {
  return (
    <BoxComponent
    display='flex'
    justifyContent='space-between'
    >
      <Figures title='Total Donations' amount='1221323'/>
      <Figures title='Total Campaigns' amount='1223'/>
      <Figures title='Active Campaigns' amount='12213'/>
      <Figures title='New Campaigns' amount='1223'/>
    </BoxComponent>
  );
}
