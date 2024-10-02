import React from 'react';
import BoxComponent from './Box';
import LogoutIcon from '@mui/icons-material/Logout';
export default function Head() {
  return (
    <BoxComponent
    display='flex'
    justifyContent='space-between'
    alignItems='center'
    padding='15px 20px'
    backgroundColor='var(--light)'
    >
        <BoxComponent
        width='140px'
        height='5vh'
        >
        <img
        style={{
            width:'100%',
            height:'100%'
        }}
        src="Images/logo.png" alt="" /></BoxComponent>
        <BoxComponent
        border="1px solid var(--primary)"
        borderRadius='7px'
        width="50px"
        height='25px'
        padding='2px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{"&:hover":{backgroundColor:' var(--hover)'}}}
        >
      <LogoutIcon fontSize='medium' sx={{color:'var(--primary)', "&:hover":{cursor:'pointer'}}}/></BoxComponent>
    </BoxComponent>
  );
}
