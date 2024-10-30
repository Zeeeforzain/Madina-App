import React from 'react';
import BoxComponent from './Components/Box';
import Sidebar from './Components/Sidebar';
import Head from './Components/Head';
import TypographyComponent from './Components/Typography';
import ButtonComponent from './Components/Button';
import { useNavigate } from 'react-router-dom'; 
import Table from './Components/Table';

export default function News() {
  const navigate = useNavigate(); 
  const handleNews = () => {
    // Here you can add your login logic if needed
    navigate('/newsform'); 
  };
  return (
    <BoxComponent>
    <Head />
    <BoxComponent display="flex" justifyContent="space-between">
      <Sidebar />
      <BoxComponent display='flex' flexDirection='column' width="82%" padding="20px" gap='50px'>
        <BoxComponent
          display="flex"
          justifyContent="space-between"
          width="100%"
        >
          <TypographyComponent
            fontSize="30px"
            fontFamily="var(--main)"
            color="var(--dull)"
            fontWeight="400"
          >
            News Management
          </TypographyComponent>
          <ButtonComponent
            variant="contained"
            backgroundColor="var(--primary)"
            sx={{ color: "var(--light)", padding: "10px 20px" }}
            onClick={handleNews}
          >
            + Add News
          </ButtonComponent>
        </BoxComponent>
        <Table/>
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
