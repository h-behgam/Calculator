import React, { useReducer } from "react";
import DigitButton from "../Buttons/DigitButton";
import OperationButton from "../Buttons/OperationButton";

export const action = {
  AddDigit: "add digit",
  Clear: "clear",
};

function Form() {
  console.log(action);
  let initialState = {
    currentNumber: "",
    previousNumber: "",
    operation: "",
  };
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case action.AddDigit:
        return {
          ...state,
          currentNumber: `${state.currentNumber || ""}${payload.digit}`,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="display">
        {console.log(typeof state, state)}
        <p>{state.currentNumber}</p>
      </div>

      <OperationButton operation={"AC"} className={"double"} />
      <OperationButton operation={"."} />
      <OperationButton operation={"/"} />
      <DigitButton digit={7} dispatch={dispatch} />
      <DigitButton digit={8} dispatch={dispatch} />
      <DigitButton digit={9} dispatch={dispatch} />
      <OperationButton operation={"*"} />
      <DigitButton digit={4} dispatch={dispatch} />
      <DigitButton digit={5} dispatch={dispatch} />
      <DigitButton digit={6} dispatch={dispatch} />
      <OperationButton operation={"-"} />
      <DigitButton digit={1} dispatch={dispatch} />
      <DigitButton digit={2} dispatch={dispatch} />
      <DigitButton digit={3} dispatch={dispatch} />
      <OperationButton operation={"+"} />
      <DigitButton digit={"00"} dispatch={dispatch} />
      <DigitButton digit={0} dispatch={dispatch} />
      <OperationButton operation={"="} className={"double"} />
    </form>
  );
}

export default Form;
