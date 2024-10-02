import React from 'react';
import MenuOption from './MenuOption';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import BoxComponent from './Box';
import TypographyComponent from './Typography';

export default function Sidebar() {
  return (
    <BoxComponent
    width="15%"
    height='90vh'
    display='flex'
    flexDirection='column'
    justifyContent="space-between"
    >
    <BoxComponent>
    <MenuOption icon={DashboardOutlinedIcon} label="Dashboard" />
    <MenuOption icon={GroupOutlinedIcon} label="Users" />
    <MenuOption icon={BallotOutlinedIcon } label="Campaigns" />
    <MenuOption icon={MonetizationOnOutlinedIcon} label="Payments" />
    </BoxComponent>
    <BoxComponent
    display='flex'
    alignItems='center'
    justifyContent='left'
    height='6vh'
    padding='5px 10px'
    sx={{"&:hover":{cursor:"pointer"}}}
    >
    <LogoutIcon/>
    <TypographyComponent marginLeft="15px" color='var(--dark)'>Logout</TypographyComponent>
    </BoxComponent>
    </BoxComponent>
  );
}
