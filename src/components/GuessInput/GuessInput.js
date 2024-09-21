import React from "react";

function GuessInput({ handleOnSubmit, gameOver }) {
  const [guess, setGuess] = React.useState("");

  const handleOnSubmitValue = (e) => {
    e.preventDefault();
    handleOnSubmit(guess);
    setGuess("");
  };

  return (
    <div>
      <form
        className="guess-input-wrapper"
        type="submit"
        onSubmit={handleOnSubmitValue}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          disabled={gameOver}
          value={guess}
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          // title="5 letter word"
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
        />
      </form>
    </div>
  );
}

export default GuessInput;
