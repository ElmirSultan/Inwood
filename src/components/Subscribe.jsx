import React from 'react'
import workroom from "../assets/images/meetingrrom.jpg"
import "../css/subscribe.css"
import Button from './Button'
const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className="subscribe-boxes">
                <div className="left-subscribe">
                    <img src={workroom} alt="" />
                </div>
                <div className="right-subscribe">
                  <div>
                  <h1><span>Join Our </span> <br />
                        Newsletter</h1>
                        <p>Receive exclusive deals, discounts and many offers.</p>
                        <form action="submit">
                            <input type="email" placeholder='Enter your email' />

                            <Button butonYazisi={"Subscribe"}/>
                        </form>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe