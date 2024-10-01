import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';

export default function Figures(props) {
  return (
    <BoxComponent
    width="230px"
    height='90px'
    padding='15px'
    borderRadius='10px'
    backgroundColor='var(--light)'
    display='flex'
    flexDirection='column'
    justifyContent='space-between'
    >
      <TypographyComponent
      fontSize='22px'
      fontWeight='600'
      fontFamily='var(--main)'
      textAlign='left'
      color='var(--dark)'
      >{props.title}</TypographyComponent>
      <BoxComponent
      display='flex'
      justifyContent='right'
      >
      <TypographyComponent
      fontSize='22px'
      fontWeight='600'
      fontFamily='var(--main)'
      color='var(--dark)'
      textAlign='right'
      >$</TypographyComponent>
      <TypographyComponent
      fontSize='22px'
      fontWeight='600'
      fontFamily='var(--main)'
      color='var(--dark)'
      textAlign='right'
      >{props.amount}</TypographyComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
