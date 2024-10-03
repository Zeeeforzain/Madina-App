import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
import Progress from './Progress';

export default function Top(props) {
  return (
    <BoxComponent>
      <TypographyComponent
        fontSize="24px"
        fontWeight='700'
        fontFamily='var(--main)'
        marginBottom='10px'
      >
        Top Campaigns
      </TypographyComponent>
      <BoxComponent
        width="200px"
        height='130px'
        padding='10px'
        overflow='hidden'
        borderRadius='10px'
        backgroundColor='var(--light)'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        boxShadow='0px 1px 1px 1px var(--paragraph)'
      >
        <Progress title='Gaza charity funds' progress={20}/>
        <Progress title='Palestine Donations' progress={80}/>
        <Progress title='Pakistan Funds' progress={70}/>
        <Progress title='USAID' progress={80}/>
        <Progress title='Government Relief' progress={40}/>
        <Progress title='Mosque Project' progress={100}/>
      </BoxComponent>
    </BoxComponent>
  );
}

