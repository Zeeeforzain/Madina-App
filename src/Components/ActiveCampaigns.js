import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
import ProgressBar from './ProgressBar';

export default function ActiveCampaigns(props) {
  return (
    <BoxComponent
      height='14vh'
      padding='10px'
      width='90%'
      borderRadius='5px'
      backgroundColor='var(--light)'
      boxShadow='0.5px 0.5px 2px 0.5px var(--dark)'
      margin='10px'
      sx={{
        '&:hover': {
          height: '16vh',
          transition:'0.2s ease-out',
          cursor: 'pointer',
          '.hover-content': {
            display: 'flex', 
          },
        },
      }}
    >
      <TypographyComponent
        fontSize='14px'
        fontWeight='600'
        color='var(--dull)'
      >
        {props.title}
      </TypographyComponent>
      <TypographyComponent
        fontSize='12px'
        fontWeight='400'
        color='var(--paragraph)'
        marginBottom='15px'
      >
        {props.description}
      </TypographyComponent>
      <ProgressBar progress={40} />
      <BoxComponent
        className="hover-content" // Add a class to target with parent hover
        display='none'
        justifyContent="space-between"
        sx={{
          // No hover styling here; it will be handled by the parent hover
        }}
      >
        <TypographyComponent
          fontSize='12px'
          fontWeight='400'
          color='var(--paragraph)'
          marginTop='15px'
        >
          Raised: $ {props.raised}
        </TypographyComponent>
        <TypographyComponent
          fontSize='12px'
          fontWeight='400'
          color='var(--paragraph)'
          marginTop='15px'
        >
          Goal: $ {props.goal}
        </TypographyComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
