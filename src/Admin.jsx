import React from 'react';
import BoxComponent from './Components/Box';
import Sidebar from './Components/Sidebar';
import Head from './Components/Head';
import TypographyComponent from './Components/Typography';
import ButtonComponent from './Components/Button';
import Searchbox from './Components/Searchbox';
import Dropdown from './Components/Dropdown';
import Table from './Components/Table';

export default function Admin() {
  const status = [
    { value: 1, label: 'All' },
    { value: 2, label: 'Active' },
    { value: 3, label: 'Inactive' },
  ];
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
      >
        <BoxComponent
        display='flex'
        justifyContent='space-between'
        width='100%'
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
        <BoxComponent
        display='flex'
        justifyContent='space-between'
        width='50%'
        margin='30px 0px'
        >
        <Searchbox/>
        <BoxComponent marginLeft='10px'><Dropdown label="Status" menuItems={status}/></BoxComponent>
        </BoxComponent>
        <Table/>
      </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
