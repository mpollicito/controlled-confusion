import React from "react";

function Highscores() {
    return (
        <table class="responsive-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Your Name</td>
                    <td>Your Score</td>
                </tr>
                <tr>
                    <td>Your Name</td>
                    <td>Your Score</td>
                </tr>
                <tr>
                    <td>Your Name</td>
                    <td>Your Score</td>
                </tr>
                <tr>
                    <td>Your Name</td>
                    <td>Your Score</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Highscores;