import React, { memo } from "react";
import { action } from "../Form/Form";

function DigitButton({ digit, dispatch }) {
  return (
    <button
      onClick={() => {
        dispatch({ type: action.AddDigit, payload: { digit } });
      }}
    >
      {digit}
    </button>
  );
}

export default memo(DigitButton);
