import React from 'react';
import { Button as MUIButton } from '@mui/material';
import './Theming.css'; // Import your CSS file

export default function ButtonComponent(props) {
  const { color, className, children, ...otherProps } = props;

  return (
    <MUIButton
      {...otherProps}
      className={`custom-button ${className || ''}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </MUIButton>
  );
}
