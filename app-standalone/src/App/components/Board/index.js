import React from "react";
import PropTypes from 'prop-types';

import Square from '../Square';

/**
 * A board for the game of tic-tac-toe.  A 3x3 square.
 */
const Board = ({ onClick, squares, winningLine }) => {
  const renderSquare = (i) => {
      const isWinningSquare = winningLine.includes(i); // Check if the square is part of the winning line

      return (
          <Square
              value={squares[i]}
              onClick={() => onClick(i)}
              isWinning={isWinningSquare} // Pass a prop to indicate it's a winning square
          />
      );
  };

    return (
        <div>
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
        </div>
    )
};

Board.propTypes = {
    /**
     *  The 1..9 array of squares to display
     */
    squares: PropTypes.array.isRequired,

    /**
     *  The handler for when a square is clicked
     */
    onClick: PropTypes.func,

    
    winningLine: PropTypes.arrayOf(PropTypes.number)
};

export default Board;