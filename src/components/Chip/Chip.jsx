import React from 'react';
import './Chip.css';

const Chip = ({ value, onClick, activeChip }) => {
  const style = `chip ${value}`;
  return (
    <div>
      <button className={activeChip === value ? `${style} active` : style} onClick={onClick}></button>
    </div>
  );
};

export default Chip;
