import React from 'react'

function Operations({ setOperation, number, operation }) {
  function setOp(e) {
    let op = e.target.className;
    
    setOperation(op);


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
      <div className="equals">
        &#61;
      </div>
    </div>
  );
}

export default Operations