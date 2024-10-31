import React from "react";
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import ButtonComponent from "./Button";

export default function Confirm() {
  return (
    <BoxComponent
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      flexDirection="column"
      width="25%"
      height="20vh"
      padding="10px"
      borderRadius='10px'
      backgroundColor='var(--light)'
      border="2px solid var(--dull)"
    >
      <TypographyComponent
        fontSize="15px"
        fontFamily="var(--main)"
        fontWeight="600"
        color="var(--dull)"
      >
        Are You sure you want to remove this news?
      </TypographyComponent>
      <BoxComponent width="90%" display="flex" justifyContent="right">
        <ButtonComponent
          sx={{
            textTransform: "none",
            color: "var(--primary)",
            fontSize: "10x",
          }}
        >
          No
        </ButtonComponent>
        <ButtonComponent
          variant="contained"
          backgroundColor="var(--primary)"
          sx={{
            textTransform: "none",
            fontSize: "10x",
          }}
        >
          Yes
        </ButtonComponent>
      </BoxComponent>
    </BoxComponent>
  );
}
