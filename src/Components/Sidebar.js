import React from 'react';
import MenuOption from './MenuOption';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import LogoutIcon from '@mui/icons-material/Logout';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <BoxComponent
    width="15%"
    height='90vh'
    display='flex'
    flexDirection='column'
    justifyContent="space-between"
    backgroundColor='var(--light)'
    >
    <BoxComponent>
    <MenuOption icon={DashboardOutlinedIcon} label="Dashboard" />
    <MenuOption icon={ArticleIcon} label="News" />
    <MenuOption icon={GroupOutlinedIcon} label="Admins" />
    </BoxComponent>
    <BoxComponent
    display='flex'
    alignItems='center'
    justifyContent='left'
    height='6vh'
    padding='5px 10px'
    sx={{"&:hover":{cursor:"pointer"}}}
    onClick={handleLogout} 
    >
    <LogoutIcon/>
    <TypographyComponent marginLeft="15px" color='var(--dark)'>Logout</TypographyComponent>
    </BoxComponent>
    </BoxComponent>
  );
}
