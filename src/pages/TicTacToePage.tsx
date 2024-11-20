import React from 'react';
import TicTacToe from '../components/TicTacToe';


const TicTacToePage: React.FC = () => {
    return (
        <div>
            <h2>圈圈叉叉</h2>
            <TicTacToe />
        </div>
    );
};

export default TicTacToePage;