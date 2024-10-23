import React from 'react';
import BoxComponent from './Components/Box';
import Sidebar from './Components/Sidebar';
import Head from './Components/Head';
import TypographyComponent from './Components/Typography';
import ButtonComponent from './Components/Button';
import Searchbox from './Components/Searchbox';

export default function Admin() {
  return (
    <BoxComponent>
      <Head/>
      <BoxComponent
        display="flex"
        justifyContent="space-between"
      >
      <Sidebar/>
      <BoxComponent
      width='82%'
      padding='20px'
      border='2px solid blue'
      >
        <BoxComponent
        display='flex'
        justifyContent='space-between'
        width='100%'
        border='2px solid green'
        >
          <TypographyComponent
          fontSize='30px'
          fontFamily='var(--main)'
          color='var(--dull)'
          fontWeight='400'
          >
            Admin Access
          </TypographyComponent>
          <ButtonComponent
          varient='contained'
          backgroundColor='var(--primary)'
          sx={{
            color:'var(--light)',
            padding:"10px",
          }}
          >+ Add Sub-Admin</ButtonComponent>
        </BoxComponent>
        <Searchbox/>
      </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
