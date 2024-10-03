import React, { useState } from "react"; // Import useState for managing tooltip visibility
import BoxComponent from "./Box";
import TypographyComponent from "./Typography";
import ProgressBar from "./ProgressBar";

export default function Progress({ title, progress }) {
  const [showTooltip, setShowTooltip] = useState(false); // State for tooltip visibility

  return (
    <BoxComponent
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      height="20px"
      padding="2px"
      position="relative" // Added for tooltip positioning
    >
      <TypographyComponent
        fontSize="12px"
        fontFamily="var(--main)"
        color="var(--dark)"
        width="30%"
        overflow="hidden"
        textOverflow="ellipsis"
        position="relative"
        style={{ whiteSpace: "nowrap" }}
        onMouseEnter={() => setShowTooltip(true)} // Show tooltip on hover
        onMouseLeave={() => setShowTooltip(false)} // Hide tooltip when not hovering
      >
        {title}
      </TypographyComponent>
      <BoxComponent width="60%" display="flex" alignItems="center">
        <ProgressBar progress={progress} />
      </BoxComponent>
      {showTooltip && ( 
        <BoxComponent
          position="absolute"
          top="80%" 
          left="0"
          fontSize='10px'
          fontFamily='var(--main)'
          backgroundColor="var(--paragraph)"
          color="var(--light)"
          padding="5px"
          borderRadius="5px"
          whiteSpace="nowrap"
          zIndex="20"
        >
          {title}
        </BoxComponent>
      )}
    </BoxComponent>
  );
}
