import React from 'react';
import './Cell.css';

const Cell = ({ value, onClick }) => {
  const style = `cell ${value}`;

  return (
    <div>
      <button className={style} onClick={onClick}></button>
    </div>
  );
};

export default Cell;
