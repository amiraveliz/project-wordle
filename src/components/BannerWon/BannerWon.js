import React from "react";
import Banner from "../Banner/Banner";

function BannerWon({ guesses, handleRestart }) {
  return (
    <Banner status="happy" handleRestart={handleRestart}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guesses} {guesses > 1 ? "guesses" : "guess"}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default BannerWon;
