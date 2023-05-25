import React from 'react'
import "../css/categorycard.css"
const Categorycard = ({item,handleClick}) => {
  const {imageOfProduct,itemSet,price} = item
    return (
        <div className='category-card'>
            <img src={imageOfProduct} alt="" />
            <div className='card-details'>
                <p>{itemSet}</p>
                <p>${price}</p>
                <button onClick={()=>handleClick(item)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Categorycard