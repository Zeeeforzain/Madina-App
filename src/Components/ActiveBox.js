import React from 'react';
import BoxComponent from './Box';
import ActiveCampaigns from './ActiveCampaigns';
import TypographyComponent from './Typography';
export default function ActiveBox() {
  return (
    <BoxComponent>
        <TypographyComponent>Active Campaigns</TypographyComponent>
      <ActiveCampaigns raised="121321" goal="32544"/>
      <ActiveCampaigns raised="121321" goal="32544"/>
      <ActiveCampaigns raised="121321" goal="32544"  />
      <ActiveCampaigns raised="121321" goal="32544"/>
      <ActiveCampaigns raised="121321" goal="32544" />
      <ActiveCampaigns raised="121321" goal="32544" />
    </BoxComponent>
  );
}
