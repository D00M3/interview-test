import React, { useState } from "react";
import Board from "../Board";

// will show winning move if mouse hover

function move() {
    const [color, setColor] = useState('purple');
    const [hover, setHover] = useState(false);
   
    return (
      <>
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        </>
     
    )
  }





/**
 * A game of tic-tac-toe.
 */
const Game = () => {
    const [gameHistory, setGameHistory] = useState([{ squares: Array(9).fill(null) }]); // Start of game
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const [wins, setWins] = useState({ X: 0, O: 0, Draws: 0 });

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
                return squares[a];
            }
        }

        return null;
    };

    const handleClick = (i) => {
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
    const winningLine = calculateWinner(current.squares); // Get the winning line
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

    // Check if the game is a draw
    const isDraw = !winner && current.squares.every(square => square !== null);

    // Update wins count if the game is over
    if (winner) {
        if (winner === "X" && wins.X === 0) {
            setWins({ ...wins, X: wins.X + 1 });
        } else if (winner === "O" && wins.O === 0) {
            setWins({ ...wins, O: wins.O + 1 });
        }
    } else if (isDraw && wins.Draws === 0) {
        setWins({ ...wins, Draws: wins.Draws + 1 });
    }

    

    return (
        <>
        <div className="game">
            <div className="game-board">
            <Board
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                    winningLine={winningLine}  // Pass the winning line to the Board component
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
         <div className="game-info">
         <div>{status}</div>
         <ol>{moves}</ol>
         <h2>Winners Table</h2>
         <table>
             <thead>
                 <tr>
                     <th>Player</th>
                     <th>Wins</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>X</td>
                     <td>{wins.X}</td>
                 </tr>
                 <tr>
                     <td>O</td>
                     <td>{wins.O}</td>
                 </tr>
                 <tr>
                     <td>Draws</td>
                     <td>{wins.Draws}</td>
                 </tr>
             </tbody>
         </table>
     </div>
 </div>
 </>
    );
};

export default Game;