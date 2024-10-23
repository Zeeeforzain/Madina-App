import React from 'react';
import BoxComponent from './Components/Box';
import Sidebar from './Components/Sidebar';
import Head from './Components/Head';

export default function News() {
  return (
    <BoxComponent>
      <Head/>
      <Sidebar/>
    </BoxComponent>
  );
}
