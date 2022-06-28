import React from "react";

function Operations({ setNumber, setOperation, number, operation, setTotal, total }) {
  function setOp(e) {
    let op = e.target.className;

    if(number === 0 && operation === ""){
        setOperation(op)
    }else if(number !== 0 && operation !== ""){
        equal()
        setNumber(0)
        setOperation(op)
    }

  }

  function equal() {
    if (operation === "plus") {
        setTotal(+total + +number)
        setNumber(0);
        setOperation("")
    } else if (operation === "minus") {
        setTotal(total - number)
        setNumber(0);
        setOperation("");
    }else if (operation === "divide") {
        setTotal(total / number)
        setNumber(0);
        setOperation("");
    }else if (operation === "multiply") {
        setTotal(total * number)
        setNumber(0)
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
      <div onClick={equal} className="equals">&#61;</div>
    </div>
  );
}

export default Operations;
