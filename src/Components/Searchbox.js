import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbox() {
  return (
    <TextField
      variant="outlined"
      placeholder="Search a user by name, e-mail or phone number"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: 'white',
        borderRadius: '4px',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'var(--dull)', // Use your custom variable if needed
          },
          '&:hover fieldset': {
            borderColor: 'var(--secondary)',
          },
        },
      }}
    />
  );
}