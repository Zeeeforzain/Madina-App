
import React from 'react';
import BoxComponent from './Box';
export default function ProgressBar({ progress }) {
  return (
    <BoxComponent style={{
      width: '100%',
      backgroundColor: 'var(--light)',
      borderRadius: '20px',
      border:'1px solid var(--primary)',
      overflow: 'hidden',
    }}>
      <BoxComponent style={{
        width: `${progress}%`,
        height: '8px',
        backgroundColor: 'var(--primary)',
      }} />
    </BoxComponent>
  );
}
