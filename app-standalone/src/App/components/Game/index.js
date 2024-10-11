import React, { useState } from "react";
import Board from "../Board";
import WinnersTable from "../winners";

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
    const [gameHistory, setGameHistory] = useState([{ squares: Array(9).fill(null) }]); // Start of game
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const [colour, setColour] = useState('Green');
    const [winnerHistory, setWinnerHistory] = useState([]); // Track all game winner

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: lines[i] };  // returns the winner and the line
            }
        }

        return null;
    };

    //changes winning move to green

    const handleClick = (i,event) => {
        event.target.style.color = 'green';
        const history = gameHistory.slice(0, stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = xIsNext ? "X" : "O";

        setGameHistory([...history, { squares }]);
        setStepNumber(history.length);
        setXisNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const current = gameHistory[stepNumber];
    const winnerInfo = calculateWinner(current.squares); // Get winner information
    const winner = winnerInfo ? winnerInfo.winner : null; // Determine the winner
    const winningLine = winnerInfo ? winnerInfo.line : []; // Get the winning line

    // Add winner to winnerHistory if there's a winner and game just ended
    if (winner && !winnerHistory.includes(winner)) {
        setWinnerHistory([...winnerHistory, winner]); 

    const moves = gameHistory.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(i, event) => handleClick(i, event)}
                    winningLine={winningLine} 
                />
             </div>
            <div className="game-info">
                <div style={{ color: winner ? 'green' : 'black' }}>{status}</div> {/* Change color based on winner */}
                <ol>{moves}</ol>
            </div>
            <WinnersTable winnerHistory={winnerHistory} /> {/* Add WinnersTable component */}
        </div>
    );
};

}

export default Game;