import React, { useState } from 'react';

const UltimatePassword: React.FC = () => {
    const [min, setMin] = useState(1);
    const [max, setMax] = useState(100);
    const [answer] = useState(Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState<number | ''>('');
    const [message, setMessage] = useState('');

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
        }
        setGuess('');
    };

    return (
        <div>
            <p>Guess the number between {min} and {max}</p>
            <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(Number(e.target.value))}
            />
            <button onClick={handleGuess}>Guess</button>
            <p>{message}</p>
        </div>
    );
};

export default UltimatePassword;
