import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import InputComponent from "./InputComponent";
import Dropdown from "./Dropdown";
import ImageComponent from "./ImageComponent";
import TextArea from "./TextArea";
import TagsComponent from "./Tags";
import ButtonComponent from "./Button";
import { useLocation } from 'react-router-dom';

export default function NewsForm() {
  const location = useLocation();
  const title = location.state?.title || 'Add News';
  const category = [
    { value: 1, label: "Latest News" },
    { value: 2, label: "Pakistan" },
    { value: 3, label: "International" },
    { value: 4, label: "Sports" },
    { value: 5, label: "Showbiz" },
    { value: 6, label: "Business" },
    { value: 7, label: "Health" },
    { value: 8, label: "Science & Technology" },
    { value: 9, label: "Interesting" },
    { value: 10, label: "Zero Point" },
    { value: 11, label: "Special Feature" },
  ];

  return (
    <BoxComponent
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        backgroundImage: `url('Images/bg2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <BoxComponent
        margin="50px"
        padding="30px 15px"
        borderRadius='10px'
        width="40%"
        gap='10px'
        // height="135vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        backgroundColor='var(--light)'
        // boxShadow='1px 1px 1px 1px var(--dull)'
      >
        <TypographyComponent
          fontSize="40px"
          color="var(--dull)"
          fontFamily="var(--main)"
          fontWeight="600"
          marginBottom='20px'
        >
          {title}
        </TypographyComponent>
        <BoxComponent width='90%'>
        <InputComponent variant="outlined" label="Heading" /></BoxComponent>
        <BoxComponent width="90%">
          <TextArea label="Description" placeholder={"Add description here"} />
        </BoxComponent>
        <BoxComponent width='90%'>
        <InputComponent label="Country" /></BoxComponent>
        <BoxComponent width='90%'><InputComponent label="City" /></BoxComponent>
        <BoxComponent width="90%" >
          <TagsComponent label={"Tags"} />
        </BoxComponent>
        <BoxComponent width="90%">
          <Dropdown label="Category" menuItems={category} />
        </BoxComponent>

        <ImageComponent />
        <ButtonComponent
          variant="contained"
          backgroundColor="var(--primary)"
          sx={{
            width: "90%",
            padding: "10px",
          }}
        >
          Submit
        </ButtonComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
