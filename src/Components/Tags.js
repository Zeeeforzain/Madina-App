import React, { useState } from "react";
import { TextField, Chip, Box } from "@mui/material";
import BoxComponent from "./Box";

const TagsComponent = ({ label, placeholder }) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = inputValue.trim();
      
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInputValue(""); // Clear input after adding
    }
  };

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <BoxComponent display="flex" flexDirection="column" gap={0.5}>
      {/* Tag Input Field */}
      <TextField
        label={label}
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        fullWidth
        variant="outlined"
        InputProps={{
          sx: { flexWrap: "wrap" }
        }}
      />

      {/* Displaying Tags */}
      <BoxComponent display="flex" flexWrap="wrap" gap={1}>
        {tags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            onDelete={() => handleDelete(tag)}
            color="var(--primary)"
          />
        ))}
      </BoxComponent>
    </BoxComponent>
  );
};

export default TagsComponent;
