import React from "react";
import PropTypes from 'prop-types';

/**
 * A square in the game of tic tac toe.   Can be clicked or the square can contain a value.
 */
const Square = ({ value, onClick, isWinningSquare }) => {
    return (
        <button
            className={`square ${isWinningSquare ? 'highlight' : ''}`}  // Add 'highlight' class if it is a winning square
            onClick={onClick}
        >
            {value}
        </button>
    );
};

Square.propTypes = {
    /**
     * The value of the square (X, O, or null)
     */
    value: PropTypes.string,

    /**
     * Handler for when the square is clicked
     */
    onClick: PropTypes.func.isRequired,

    /**
     * Whether the square is part of the winning line
     */
    isWinningSquare: PropTypes.bool
};

export default Square;