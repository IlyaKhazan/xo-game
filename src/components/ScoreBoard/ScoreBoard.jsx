import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = ({ score, xPlaying }) => {
  const { xScore, oScore } = score;
  return (
    <div className="scoreBoard">
      <span className={`score score--x ${!xPlaying && 'inactive'}`}>X - {xScore}</span>
      <span className={`score score--o ${xPlaying && 'inactive'}`}>O - {oScore}</span>
    </div>
  );
};

export default ScoreBoard;
