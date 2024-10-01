import React from 'react';
import BoxComponent from './Box';
import TypographyComponent from './Typography';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';export default function MenuOption() {
  return (
    <BoxComponent>
      <DashboardOutlinedIcon/>
      <TypographyComponent>Dashboard</TypographyComponent>
    </BoxComponent>
  );
}
