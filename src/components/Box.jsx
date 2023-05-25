import React from 'react'
import "../css/box.css"
const Box = ({imageOfThing,nameOfThing}) => {
  return (
    <div className='qutu'>
        <div className="top-side">{imageOfThing}</div>
        <div className="bottom-side">
            <p>{nameOfThing}</p>
        </div>
    </div>
  )
}

export default Box