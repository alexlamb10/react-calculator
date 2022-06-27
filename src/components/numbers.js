import React from 'react'
import SingleBtn from './SingleBtn'

function Numbers() {

    const numArr = [1,2,3,4,5,6,7,8,9]
  return (
    <div className='numsDiv'>
        <SingleBtn numArr={numArr} />
    </div>
  )
}

export default Numbers