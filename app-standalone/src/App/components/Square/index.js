import React from "react";
import PropTypes from 'prop-types';

/**
 * A square in the game of tic tac toe. Can be clicked or the square can contain a value.
 * If it's a winning square, it will be highlighted.
 */
const Square = ({ onClick, value, isWinning }) => (
    <button 
        className="square" 
        onClick={onClick}
        style={{ backgroundColor: isWinning ? 'lightgreen' : 'white' }} // Conditional background color for winning squares
    >
        {value}
    </button>
);

Square.propTypes = {
    /**
     * The handler for when a square is clicked
     */
    onClick: PropTypes.func,

    /**
     * The value to put in the square (either "X", "O", or null)
     */
    value: PropTypes.string,

    /**
     * Whether the square is part of the winning line
     */
    isWinning: PropTypes.bool
};

export default Square;
