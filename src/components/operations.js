import React from "react";

function Operations({
  setNumber,
  setOperation,
  number,
  operation,
  setTotal,
  total,
  setNumOfOperation,
  numOfOperation,
}) {
  function setOp(e) {
    let op = e.target.className;

    if (number === 0 && operation === "") {
      setOperation(op);
      setNumOfOperation(numOfOperation+1)
    } else if (number !== 0 && operation !== "") {
      equal();
      setNumber(0);
      setOperation(op);
    }
  }

  function equal() {
    if (operation === "plus") {
      setNumOfOperation(numOfOperation+1);
      setTotal(+total + +number);
      setNumber(0);
      setOperation("");
    } else if (operation === "minus") {
      setTotal(total - number);
      setNumOfOperation(numOfOperation+1);
      setNumber(0);
      setOperation("");
    } else if (operation === "divide") {
      if (total % number !== 0) {
        let num = total / number;
        setNumOfOperation(numOfOperation+1);
        setTotal(num.toFixed(3));
        setNumber(0);
      setOperation("");
      } else {
        setTotal(total / number);
        setNumOfOperation(numOfOperation+1);
        setNumber(0);
        setOperation("");
      }
    } else if (operation === "multiply") {
      setTotal(total * number);
      setNumOfOperation(numOfOperation+1);
      setNumber(0);
      setOperation("");
    }
  }

  return (
    <div className="ops-div">
      <div onClick={setOp} className="plus">
        &#43;
      </div>
      <div onClick={setOp} className="minus">
        &#8722;
      </div>
      <div onClick={setOp} className="multiply">
        &#215;
      </div>
      <div onClick={setOp} className="divide">
        &#247;
      </div>
      <div onClick={equal} className="equals">
        &#61;
      </div>
    </div>
  );
}

export default Operations;
