import React from "react";

function OperationButton({ operation, className }) {
  return <button className={className ? className + " operator" : "operator"}>{operation}</button>;
}

export default OperationButton;
