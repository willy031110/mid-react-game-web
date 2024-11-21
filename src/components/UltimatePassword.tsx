import React, { useState } from 'react';
import './UltimatePassword.css'; // 引入CSS樣式

const UltimatePassword: React.FC = () => {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [answer] = useState(Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState<number | ''>('');
    const [message, setMessage] = useState('');
    const [isExploded, setIsExploded] = useState(false);
    // 重置遊戲狀態
    const resetGame = () => {
        setMin(1);
        setMax(100);
        setMessage('');
        setGuess('');
        setIsExploded(false);
    };
    const handleGuess = () => {
        const numGuess = Number(guess);
        if (numGuess > max || numGuess < min) {
            setMessage(`Please guess between ${min} and ${max}.`);
        } else if (numGuess > answer) {
            setMax(numGuess - 1);
            setMessage('Too high!');
        } else if (numGuess < answer) {
            setMin(numGuess + 1);
            setMessage('Too low!');
        } else {
            setMessage('Correct! You found the answer!');
            setIsExploded(true);  // 爆炸效果
        }
        setGuess('');
    };

    return (
        <div className="ultimate-password-container">
            <h3>Guess the number between {min} and {max}</h3>

            {/* 炸彈圖示區域 */}
            <div className="bomb-container">
                {!isExploded ? (
                    <>
                        <div className="bomb-image"></div>
                        <div className="range-number">{min} - {max}</div>
                    </>
                ) : (
                    <div className="explosion"></div>
                )}
            </div>

            {/* 猜測區域 */}
            {!isExploded && (
                <>
                    <input
                        type="number"
                        value={guess}
                        onChange={(e) => setGuess(Number(e.target.value))}
                        style={{ marginRight: '10px' }}
                    />
                    <button onClick={handleGuess}>Guess</button>
                </>
            )}

            {/* 結果訊息 */}
            <p>{message}</p>
            {isExploded && (
            <div style={{ marginTop: '20px' }}>
                <button onClick={resetGame}>Play Again</button>
            </div>
        )}
        </div>
        
        
    );
};

export default UltimatePassword;
