import React, { memo } from "react";
import { action } from "../Form/Form";

function OperationButton({ operation, className, dispatch }) {
  return (
    <button
      className={className ? className + " operator" : "operator"}
      onClick={() => {
        dispatch({ type: action.ChoseOperation, payload: { operation } });
      }}
    >
      {operation}
    </button>
  );
}

export default memo(OperationButton);
