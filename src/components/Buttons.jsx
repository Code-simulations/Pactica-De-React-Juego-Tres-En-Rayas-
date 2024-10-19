import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Buttons = ({ id }) => {
  const [turn, setTurn] = useState(null); // Initial state is null

  const theTurns = () => {
    setTurn(turn === null ? true : !turn); // Toggle state
  };

  return (
    <button id={id} className="btn" onClick={theTurns}>
      {turn === null ? "" : turn ? "X" : "O"}
    </button>
  );
};
