import React from 'react';
import './ResetButton.css';

const ResetButton = ({ resetBoard }) => {
  return (
    <button className="resetButton" onClick={resetBoard}>
      Новая игра
    </button>
  );
};

export default ResetButton;
