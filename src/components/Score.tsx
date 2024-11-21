import React from 'react';

interface ScoreBoardProps {
  xScore: number;
  oScore: number;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ xScore, oScore }) => {
  return (
    <div className="score-board">
      <p>玩家 X: {xScore}</p>
      <p>玩家 O: {oScore}</p>
    </div>
  );
};


