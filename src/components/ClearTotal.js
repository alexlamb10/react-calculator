import React from 'react'

function ClearTotal({setNumber, setOperation, setTotal,setNumOfOperation}) {

  function clear() {
    setNumber(0)
    setTotal(0)
    setNumOfOperation(0)
    setOperation("")
  }

  return (
    <div onClick={clear} className='clear-btn'>clear</div>
  )
}

export default ClearTotal