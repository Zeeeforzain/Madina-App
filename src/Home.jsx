import React from 'react';
import BoxComponent from './Components/Box';
import Head from './Components/Head';
import Sidebar from './Components/Sidebar';

export default function Home() {
  return (
    <BoxComponent>
      <Head/>
      <BoxComponent>
      <Sidebar/>
      </BoxComponent>
    </BoxComponent>
  );
}
