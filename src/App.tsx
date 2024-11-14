import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import TicTacToePage from './pages/TicTacToePage';
import UltimatePasswordPage from './pages/UltimatePasswordPage';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
                    <Link to="/ultimate-password">Ultimate Password</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tic-tac-toe" element={<TicTacToePage />} />
                    <Route path="/ultimate-password" element={<UltimatePasswordPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
