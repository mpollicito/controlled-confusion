import React from "react";

function Highscores() {
    return (
        <table className="responsive-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Best Time</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Morgan</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>Matt</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>Angela</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Susan</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>Fred</td>
                    <td>3</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Highscores;