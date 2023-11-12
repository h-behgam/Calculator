import React from "react";
import { action } from "../Form/Form";

function DigitButton({ digit, dispatch }) {
  return (
    <button
      onClick={() => { 
        dispatch({type: action.AddDigit, payload: {digit}})
       }}
    >
      {digit}
    </button>
  );
}

export default DigitButton;
