import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
import ProgressBar from './ProgressBar';
export default function ActiveCampaigns(props) {
  return (
    <BoxComponent
    height='15vh'
    padding='10px'
    width='25%'
    >
      <TypographyComponent>Title</TypographyComponent>
      <TypographyComponent>Description</TypographyComponent>
      <ProgressBar progress={40}/>
      <BoxComponent
       display='flex'
    justifyContent="space-between"
      >
        <TypographyComponent>Raised:${props.raised}</TypographyComponent>
        <TypographyComponent>Goal:${props.goal}</TypographyComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
