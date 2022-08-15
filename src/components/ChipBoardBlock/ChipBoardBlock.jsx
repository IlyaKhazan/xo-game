import React from 'react';
import Chip from '../Chip/Chip';
import './ChipBoardBlock.css';

const ChipBoardBlock = ({ xChips, oChips, onClick, xPlaying, activeChip }) => {
  return (
    <div className="chipBoardBlock">
      {xPlaying ? (
        <div className="chipBoard">
          {xChips.map((value, index) => (
            <Chip activeChip={activeChip} key={index} value={value} onClick={() => onClick(value)} />
          ))}
        </div>
      ) : (
        <div className="chipBoard">
          {oChips.map((value, index) => (
            <Chip activeChip={activeChip} key={index} value={value} onClick={() => onClick(value)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChipBoardBlock;
