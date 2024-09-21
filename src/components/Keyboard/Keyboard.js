import React from "react";
import { KEYBOARD, KEYBOARD_MAP } from "../../constants";

function Keyboard({ keyboardStatus }) {
  return (
    <div className="keyboard">
      {KEYBOARD.map((row, indexRow) => (
        <div className="keyboard-row" key={indexRow}>
          {row.map((key, indexKey) => (
            <button
              key={`${indexRow}-${indexKey}`}
              className={`keyboard-item cell ${keyboardStatus[key]}`}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
