import React from 'react'
import "../css/productcard.css"
const Productcard = ({item,handleClick}) => {
  const {imageOfProduct,price} = item
  return (
    <div className='product-card'>
        <div className='plus'  onClick={()=>handleClick(item)}><i className="bi bi-plus-circle-dotted"></i></div>
        <img src={imageOfProduct} alt="" />
        <p>${price}</p>
    </div>
  )
}

export default Productcard