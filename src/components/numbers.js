import React from 'react'

function Numbers({number, setNumber}) {

    const numArr = [1,2,3,4,5,6,7,8,9]

    function setNumToOperate (e) {
        let num = e.target.innerHTML;
        
        if(number === 0){
            setNumber(num)
        }else{
            setNumber(number += num)
            console.log(number)
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

export default Numbers