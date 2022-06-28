import React from 'react'

function ClearTotal({setNumber, setOperation, setTotal}) {

  function clear() {
    setNumber(0)
    setTotal(0)
    setOperation("")
  }

  return (
    <div onClick={clear} className='clear-btn'>clear</div>
  )
}

export default ClearTotal