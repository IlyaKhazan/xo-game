import React from 'react';
import Cell from '../Cell/Cell';
import './Board.css';

const Board = ({ cells, onClick, activeChip }) => {
  return (
    <div className="board">
      {cells.map((value, index) => (
        <Cell value={value} key={index} activeChip={activeChip} onClick={() => activeChip && onClick(index)} />
      ))}
    </div>
  );
};

export default Board;
