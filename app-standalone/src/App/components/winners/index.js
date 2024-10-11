import React from "react";

/**
 * Displays a table of winners from the past games.
 * @param {Array} winnerHistory - An array of strings where each entry is the winner of a game.
 */
const WinnersTable = ({ winnerHistory }) => {
    return (
        <div>
            <h3>Winner History</h3>
            <table>
                <thead>
                    <tr>
                        <th>Game Number</th>
                        <th>Winner</th>
                    </tr>
                </thead>
                <tbody>
                    {winnerHistory.map((winner, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{winner}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WinnersTable;
