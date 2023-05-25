import React from 'react'
import "../css/home.css"
import Button from './Button'
const Explore = () => {
  return (
    <section className='explore'>
         <div className="explore-qutu">
         <h1>Exclusive Deals of <br />
            Furniture Collection</h1>
            <p>Explore different categories. Find the best deals.</p>

            <Button butonYazisi={"Shop Now"}/>
         </div>
    </section>
  )
}

export default Explore