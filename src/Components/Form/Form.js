import React, { useReducer } from "react";
import DigitButton from "../Buttons/DigitButton";
import OperationButton from "../Buttons/OperationButton";

export const action = {
  AddDigit: "add digit",
  Clear: "clear",
  ChoseOperation: "chose operation",
  Equal: "equal",
};

function Form() {
  let initialState = {
    currentNumber: "",
    previousNumber: "",
    operation: "",
  };
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case action.AddDigit:
        if (payload.digit === 0 && state.currentNumber === "") return state;
        if (payload.digit === "00" && state.currentNumber === "") return state;
        if (payload.digit === "." && state.currentNumber.includes(".")) return state;

        return {
          ...state,
          currentNumber: `${state.currentNumber || ""}${payload.digit}`,
        };
      case action.Clear:
        return { currentNumber: "", previousNumber: "", operation: "" };

      case action.ChoseOperation:
        if (state.currentNumber === "" && state.previousNumber === "" && payload.operation !== "") {
            return {...state, operation: ""}
        }
        if (state.operation !== "" && state.currentNumber === "") {
          return state;
        }
        if (state.currentNumber !== "" && state.previousNumber !== "" && state.operation !== "") {
          return {
            currentNumber: "",
            previousNumber: equal(state),
            operation: payload.operation,
          };
        }
        return {
          ...state,
          previousNumber: state.currentNumber,
          currentNumber: "",
          operation: payload.operation,
        };

      case action.Equal:
        if (state.currentNumber === "" || state.previousNumber === "" || state.operation === "") {
          return state;
        }
        return {
          currentNumber: equal(state),
          previousNumber: "",
          operation: "",
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function equal(state) {
    let { currentNumber, previousNumber, operation } = state;
    currentNumber = parseFloat(currentNumber);
    previousNumber = parseFloat(previousNumber);
    switch (operation) {
      case "+":
        return previousNumber + currentNumber;
      case "-":
        return previousNumber - currentNumber;
      case "*":
        return previousNumber * currentNumber;
      case "/":
        return previousNumber / currentNumber;

      default:
        break;
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="display">
        {console.log(state)}
        <p>
          {state.previousNumber}
          <span>{state.operation}</span>
        </p>
        <p>{state.currentNumber === "" ? 0 : state.currentNumber}</p>
      </div>

      <button
        className="double"
        onClick={() => {
          dispatch({ type: action.Clear });
        }}
      >
        AC
      </button>
      <DigitButton digit={"."} dispatch={dispatch} />
      <OperationButton operation={"/"} dispatch={dispatch} />
      <DigitButton digit={7} dispatch={dispatch} />
      <DigitButton digit={8} dispatch={dispatch} />
      <DigitButton digit={9} dispatch={dispatch} />
      <OperationButton operation={"*"} dispatch={dispatch} />
      <DigitButton digit={4} dispatch={dispatch} />
      <DigitButton digit={5} dispatch={dispatch} />
      <DigitButton digit={6} dispatch={dispatch} />
      <OperationButton operation={"-"} dispatch={dispatch} />
      <DigitButton digit={1} dispatch={dispatch} />
      <DigitButton digit={2} dispatch={dispatch} />
      <DigitButton digit={3} dispatch={dispatch} />
      <OperationButton operation={"+"} dispatch={dispatch} />
      <DigitButton digit={"00"} dispatch={dispatch} />
      <DigitButton digit={0} dispatch={dispatch} />
      <button
        className={"double"}
        onClick={() => {
          dispatch({ type: action.Equal });
        }}
      >
        =
      </button>
    </form>
  );
}

export default Form;
