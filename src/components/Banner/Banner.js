import React from "react";

function Banner({ status, handleRestart, children }) {
  return (
    <div className={`${status} banner`}>
      {children}
      <button onClick={handleRestart}>PLAY AGAIN</button>
    </div>
  );
}

export default Banner;
