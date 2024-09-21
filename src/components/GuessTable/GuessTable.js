import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessRow from "../GuessRow/GuessRow";

function GuessTable({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((row, indexRow) => (
        <GuessRow guess={guessList[indexRow]} key={indexRow} answer={answer} />
      ))}
    </div>
  );
}

export default GuessTable;
