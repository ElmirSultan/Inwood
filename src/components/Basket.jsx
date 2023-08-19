import React, { useRef, useState, useEffect } from 'react';
import "../css/sepet.css";


const Basket = ({ closeBasket, cart, setCart, handleChange, toggleBasket }) => {
  const benimSepett = useRef();
  const [price, setPrice] = useState(0);


  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (
      ans += item.amount * item.price
    ))
    setPrice(ans);
  }

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    // handlePrice();
  }

  useEffect(() => {
    handlePrice();
  })

  return (
    <div className='benim-sepet' ref={benimSepett}>
      <div className='contents'>
        <h1>My Basket</h1>
        <i className="bi bi-x-circle closeBasket" onClick={toggleBasket}></i>
        <div className='basket-box'>
          {
            cart?.map((item) => (
              <div className="cart-box" key={item.id}>
                <div className="cart-img">
                  <div className='cart-img-name'>
                    <img src={item.imageOfProduct} alt='imageofProduct'/>
                    <p>{item.itemSet}</p>
                  </div>

                </div>
                <div className='butons'>
                  <button onClick={() => handleChange(item, +1)}> + </button>
                  <button>{item.amount}</button>
                  <button onClick={() => handleChange(item, -1)}> - </button>
                </div>
                <div className='remove-btn'>
                  <p className='price'>${item.price}</p>
                  <button onClick={() => handleRemove(item.id)} >Remove</button>
                </div>
              </div>
            ))}

          <div className='total'>
            <span>Total Price of your Cart</span>
            <span> - {price}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Basket;




