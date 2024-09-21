import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessTable from "../GuessTable/GuessTable";
import BannerWon from "../BannerWon/BannerWon";
import BannerLost from "../BannerLost/BannerLost";
import Keyboard from "../Keyboard/Keyboard";
import { KEYBOARD_MAP } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  const [guessList, setGuessList] = React.useState([]);
  const [userWon, setUserWon] = React.useState(false);
  const [userLost, setUserLost] = React.useState(false);
  const [keyboardStatus, setKeyboardStatus] = React.useState(KEYBOARD_MAP);

  console.info({ answer });

  const handleOnSubmit = (guess) => {
    setGuessList([...guessList, guess]);
    if (guess === answer) {
      setUserWon(true);
    }
    if (guessList.length === 5) {
      setUserLost(true);
    }
    updateKeyboardStatusWithGuess(guess);
  };

  const updateKeyboardStatusWithGuess = (guess) => {
    const lettersStatus = checkGuess(guess, answer);
    const updatedKeyboardStatus = { ...keyboardStatus };
    lettersStatus.forEach((letterStatus) => {
      updatedKeyboardStatus[letterStatus.letter] = letterStatus.status;
    });
    setKeyboardStatus(updatedKeyboardStatus);
  };

  const handleRestart = () => {
    setGuessList([]);
    setUserWon(false);
    setUserLost(false);
    setAnswer(sample(WORDS));
    setKeyboardStatus(KEYBOARD_MAP);
  };

  return (
    <>
      {userWon && (
        <BannerWon guesses={guessList.length} handleRestart={handleRestart} />
      )}
      {userLost && <BannerLost answer={answer} handleRestart={handleRestart} />}
      <GuessTable guessList={guessList} answer={answer} />
      <GuessInput
        handleOnSubmit={handleOnSubmit}
        gameOver={userWon || userLost}
      />
      <Keyboard keyboardStatus={keyboardStatus} />
    </>
  );
}

export default Game;
