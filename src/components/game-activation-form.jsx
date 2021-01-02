import React, { useState, useCallback, useEffect } from "react";
import { GameActivationGrid } from "./game-activation-gird";

export const GameActivation = () => {
  const [gameState, setGameState] = useState();
  const [games, setGames] = useState([]);

  const handleDisplayNumberChange = useCallback((e) => {
    setGameState((state) => ({ ...state, DisplayNumber: e.target.value }));
  }, []);

  const handleGameNumber = useCallback((e) => {
    setGameState((state) => ({ ...state, GameNumber: e.target.value }));
  }, []);

  const handleBookNumber = useCallback((e) => {
    setGameState((state) => ({ ...state, BookNumber: e.target.value }));
  }, []);

  const handleBookName = useCallback((e) => {
    setGameState((state) => ({ ...state, BookName: e.target.value }));
  }, []);

  const handleNomination = useCallback((e) => {
    setGameState((state) => ({ ...state, Nomination: e.target.value }));
  }, []);

  const handleTicketCount = useCallback((e) => {
    setGameState((state) => ({ ...state, TicketCount: e.target.value }));
  }, []);

  const handleSave = useCallback(
    (e) => {
      setGames((state) => [
        ...state,
        {
          ...gameState,
          ActivatedDate: new Date().toISOString(),
        },
      ]);

      setGameState(undefined);
    },
    [gameState]
  );

  useEffect(() => {
    console.log({ games });
  }, [games]);

  return (
    <div>
      <div>
        <label>
          Display number:
          <input
            type="text"
            value={gameState?.DisplayNumber}
            onChange={handleDisplayNumberChange}
          />
        </label>
      </div>
      <div>
        <label>
          Game number:
          <input
            type="text"
            value={gameState?.GameNumber}
            onChange={handleGameNumber}
          />
        </label>
      </div>
      <div>
        <label>
          Book number:
          <input
            type="text"
            value={gameState?.BookNumber}
            onChange={handleBookNumber}
          />
        </label>
      </div>
      <div>
        <label>
          Book name:
          <input
            type="text"
            value={gameState?.BookName}
            onChange={handleBookName}
          />
        </label>
      </div>
      <div>
        <label>
          Nomination:
          <input
            type="text"
            value={gameState?.Nomination}
            onChange={handleNomination}
          />
        </label>
      </div>
      <div>
        <label>
          Number of Tickets:
          <input
            type="text"
            value={gameState?.TicketCount}
            onChange={handleTicketCount}
          />
        </label>
      </div>
      <button onClick={handleSave}>save game data</button>
      <div>
        <GameActivationGrid games={games} />
      </div>
    </div>
  );
};
