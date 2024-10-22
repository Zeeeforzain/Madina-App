import React from 'react';
import BoxComponent from './Box';
import ActiveCampaigns from './ActiveCampaigns';
import TypographyComponent from './Typography';
import ButtonComponent from './Button';
export default function ActiveBox() {
  return (
    <BoxComponent>
        <TypographyComponent
           fontSize='24px'
           fontWeight='600'
           color='var(--dull)'
           margin='10px 20px'
        >Active Campaigns</TypographyComponent>
      <ActiveCampaigns raised="121321" goal="32544"/>
      <ActiveCampaigns raised="121321" goal="32544"/>
      <ActiveCampaigns raised="121321" goal="32544"  />
      <ActiveCampaigns raised="121321" goal="32544"/>
      <ActiveCampaigns raised="121321" goal="32544" />
      <ActiveCampaigns raised="121321" goal="32544" />
      <ButtonComponent
      varient='contained'
      backgroundColor='var(--primary)'
      sx={{
        color:"var(--light)",
        textTransform:'none',
        width:"95%",
        margin:'0px 10px',
        borderRadius:"5px"
      }}
      >View More</ButtonComponent>
    </BoxComponent>
  );
}
