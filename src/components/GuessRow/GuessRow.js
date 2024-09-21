import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessRow({ guess, answer }) {
  const guessStatus = guess ? checkGuess(guess, answer) : range(0, 5);
  return (
    <p className="guess">
      {guessStatus.map((guessStatus, indexCell) => {
        const { status = "", letter = " " } = guessStatus;
        return (
          <span className={`cell ${status}`} key={`${guess}-${indexCell}`}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default GuessRow;
