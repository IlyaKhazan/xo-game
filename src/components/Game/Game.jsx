import React, { useState } from 'react';

import Board from '../Board/Board';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import ResetButton from '../ResetButton/ResetButton';
import ChipBoardBlock from '../ChipBoardBlock/ChipBoardBlock';
import { X_CHIPS_DATA, O_CHIPS_DATA, WIN_CONDITIONS } from '../../data';
import './Game.css';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [xPlaying, setXplaying] = useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [activeChip, setActiveChip] = useState('');
  const [oChips, setOChips] = useState(O_CHIPS_DATA);
  const [xChips, setXChips] = useState(X_CHIPS_DATA);

  const handleCellClick = (cellIndex) => {
    const newBoard = board.map((value, index) => {
      if (index === cellIndex) {
        const xActive = xChips.filter((chip) => chip === activeChip);
        const oActive = oChips.filter((chip) => chip === activeChip);
        const newXChips = xChips.filter((value) => value !== activeChip);
        const newOChips = oChips.filter((value) => value !== activeChip);
        setXChips(newXChips);
        setOChips(newOChips);
        setActiveChip('');

        return xPlaying ? xActive : oActive;
      } else {
        return value;
      }
    });

    const checkWinner = (cells) => {
      for (let i = 0; i < WIN_CONDITIONS.length; i++) {
        const [a, b, c] = WIN_CONDITIONS[i];

        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
          setGameOver(true);
          return cells[a];
        }
      }
    };

    const winner = checkWinner(newBoard);

    if (winner) {
      if (winner === 'O') {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
      } else {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore });
      }
    }

    setBoard(newBoard);
    setXplaying(!xPlaying);
  };

  const resetBoard = () => {
    setGameOver(false);
    setXChips(X_CHIPS_DATA);
    setOChips(O_CHIPS_DATA);
    setBoard(Array(9).fill(null));
  };

  const handleChipClick = (value) => {
    setActiveChip(value);
  };

  return (
    <div className="container">
      <ScoreBoard score={score} xPlaying={xPlaying} />
      <ChipBoardBlock xChips={xChips} oChips={oChips} xPlaying={xPlaying} onClick={handleChipClick} activeChip={activeChip} />
      <Board cells={board} activeChip={activeChip} onClick={gameOver ? resetBoard : handleCellClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
};

export default Game;
