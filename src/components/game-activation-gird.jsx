import React from "react";

export const GameActivationGrid = ({ games }) => {
  return (
    <div>
      <table>
        {games.map((game) => (
          <tr>
            <td>
              <p>{game.DisplayNumber}</p>
            </td>
            <td>
              <p>{game.GameNumber}</p>
            </td>
            <td>
              <p>{game.BookNumber}</p>
            </td>
            <td>
              <p>{game.BookName}</p>
            </td>
            <td>
              <p>{game.Nomination}</p>
            </td>
            <td>
              <p>{game.TicketCount}</p>
            </td>
            <td>
              <p>{game.ActivatedDate}</p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
