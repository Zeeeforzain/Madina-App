import React from "react";
import BoxComponent from "./Components/Box";
import Head from "./Components/Head";
import Sidebar from "./Components/Sidebar";
import ActiveBox from "./Components/ActiveBox";
import FiguresBox from "./Components/FiguresBox";
import Graph from "./Components/Graph";
import TypographyComponent from "./Components/Typography";
import Dropdown from "./Components/Dropdown";
import DropdownList from "./Components/DropdownList";
import TopBox from "./Components/TopBox";

export default function Home() {
  const year = [
    { value: 1, label: "2024" },
    { value: 2, label: "2023" },
    { value: 3, label: "2022" },
    { value: 4, label: "2021" },
    { value: 5, label: "2020" },
  ];
  return (
    <BoxComponent>
      <Head />
      <BoxComponent
        display="flex"
        justifyContent="space-between"
      >
        <Sidebar />
        <BoxComponent width="82%" margin="10px">
          <FiguresBox />
          <BoxComponent
            display="flex"
            justifyContent="space-between"
            marginTop='15px'
          >
            <BoxComponent width="65%" >
              <BoxComponent display="flex" justifyContent="space-between">
                <TypographyComponent
                fontSize='24px'
                fontWeight='600'
                color='var(--dull)'
                >Donations Over Time</TypographyComponent>
                <BoxComponent width="25%">
                  <Dropdown label="Year" menuItems={year} />
                </BoxComponent>
              </BoxComponent>
              <BoxComponent 
              width='100%'
              height='80vh'   
              >
                <Graph />
              </BoxComponent>
              <DropdownList/>
              <TopBox/>
            </BoxComponent>
            <BoxComponent width="34%">
              <ActiveBox />
            </BoxComponent>
          </BoxComponent>
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
