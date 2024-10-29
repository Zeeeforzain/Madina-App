import React from "react";
import { TextField } from "@mui/material";

const TextArea = ({ label, value, onChange, placeholder }) => {
  return (
    <TextField
    required
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      multiline
      minRows={3} // Sets the minimum height of the text area
      fullWidth
      InputProps={{
        sx: {
          resize: "vertical",
          overflow: "auto",
        },
      }}
      variant="outlined" // Styled to match the MUI input field
    />
  );
};

export default TextArea;
