import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component

export default function Top(props) {
  return (
    <BoxComponent>
      <TypographyComponent
        fontSize="24px"
        fontWeight='700'
        fontFamily='var(--main)'
        marginBottom='10px'
      >
        {props.country}
      </TypographyComponent>
      <BoxComponent
        width="200px"
        height='130px'
        padding='5px'
        border='1px solid green'
        borderRadius='10px'
        backgroundColor='var(--light)'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        boxShadow='0px 1px 1px 1px var(--paragraph)'
      >
        <TypographyComponent
        fontSize='12px'
        fontFamily='var(--main)'
        color='var(--dark)'
        >Pakistan</TypographyComponent>
        <ProgressBar progress={10} /> 
      </BoxComponent>
    </BoxComponent>
  );
}

