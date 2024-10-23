import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";

export default function MenuOption({ icon: Icon, label, onClick }) {
  return (
    <BoxComponent
      display="flex"
      alignItems="center"
      justifyContent="left"
      width="auto"
      height="5vh"
      padding="5px 10px"
      sx={{
        "&:hover": {
          cursor: "pointer",
          backgroundColor: 'white',
        },
      }}
      onClick={onClick} // Add the onClick handler here
    >
      <Icon />
      <TypographyComponent marginLeft="15px" color="var(--dull)">
        {label}
      </TypographyComponent>
    </BoxComponent>
  );
}
