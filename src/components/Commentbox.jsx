import React from 'react'
import quote from "../assets/svgs/quote.svg"
import "../css/commentbox.css"
const Commentbox = ({imageOfPerson,comment,name,job}) => {
  return (
    <div className="comment-box">
            <div className="left-comment">
                <img src={quote} alt="" className='quote'/>
                 <div className='image-comment'><img src={imageOfPerson} alt="" /></div>
            </div>
            <div className="right-comment">
                <p>{comment}</p>
                <p>{name}</p>
                <p>{job}</p>
            </div>
        </div>
  )
}

export default Commentbox