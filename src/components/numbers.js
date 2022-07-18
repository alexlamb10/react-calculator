import React from "react";

function Numbers({ number, setNumber, setTotal, numOfOperation, total }) {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function setNumToOperate(e) {
    let num = e.target.innerHTML;

    if (numOfOperation === 0) {
      if (total === 0) {
        setTotal(num);
      } else {
        setTotal(total + num);
      }
    } else {
      if (number === 0) {
        setNumber(num);
      } else {
        setNumber((number += num));
      }
    }
  }

  return (
    <div className="numsDiv">
      <div className="nums">
        {numArr.map((i) => {
          return (
            <div onClick={setNumToOperate} className="singleNum" key={i}>
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Numbers;
