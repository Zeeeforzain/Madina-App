import React from 'react';
import BoxComponent from './Components/Box';
import Head from './Components/Head';
import Sidebar from './Components/Sidebar';
import ActiveCampaigns from './Components/ActiveCampaigns';
import ActiveBox from './Components/ActiveBox';


export default function Home() {
  return (
    <BoxComponent>
      <ActiveBox/>
    </BoxComponent>
  );
}
