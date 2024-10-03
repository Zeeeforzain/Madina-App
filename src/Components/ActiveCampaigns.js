import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
import ProgressBar from './ProgressBar';
export default function ActiveCampaigns() {
  return (
    <BoxComponent
    height='15vh'
    padding='10px'
    border='1px solid green'
    width='25%'
    >
      <TypographyComponent>Title</TypographyComponent>
      <TypographyComponent>Description</TypographyComponent>
      <ProgressBar progress={40}/>
      <BoxComponent>
        
      </BoxComponent>
    </BoxComponent>
  );
}
