import React from 'react';
import BoxComponent from './Components/Box';
import Head from './Components/Head';
import Sidebar from './Components/Sidebar';
import Graph from './Components/Graph';

export default function Home() {
  return (
    <BoxComponent>
      <Head/>
      <Sidebar/>
    </BoxComponent>
  );
}
