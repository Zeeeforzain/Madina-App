import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import InputComponent from "./InputComponent";
import Dropdown from "./Dropdown";
import ImageComponent from "./ImageComponent";
import TextArea from "./TextArea";
import TagsComponent from "./Tags";
import ButtonComponent from "./Button";

export default function NewsForm() {
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
        padding="40px 15px"
        borderRadius='10px'
        width="40%"
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
          Add News
        </TypographyComponent>
        <InputComponent variant="outlined" label="Heading" />
        <BoxComponent width="90%">
          <TextArea label="Description" placeholder={"Add description here"} />
        </BoxComponent>
        <InputComponent label="Country" />
        <InputComponent label="City" />
        <BoxComponent width="90%" margin="5px">
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
