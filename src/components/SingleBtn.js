import React from 'react'

function SingleBtn({numArr}) {
  return (
    <div className='nums'>
        {numArr.map((i) => {
            return <div className='singleNum' key={i}>{i}</div>
        })}
    </div>
  )
}

export default SingleBtn