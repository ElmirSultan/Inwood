import React from 'react'
import "../css/benefits.css"
import bnft1 from "../assets/svgs/bnft1.svg"
import bnft2 from "../assets/svgs/bnft2.svg"
import bnft3 from "../assets/svgs/bnft3.svg"
const Benefits = () => {
    return (
        <div className='benefits'>
            <h1>Benefits for your expediency</h1>
            <div className="benefits-boxes">
                <div className="bnft-box">
                    <div><img src={bnft1} alt="" /></div>
                    <h4>Payment Method</h4>
                    <p>We offer flexible payment
                        options, to make easier.</p>
                </div>

                <div className="bnft-box">
                    <div><img src={bnft2} alt="" /></div>
                    <h4>Return policy</h4>
                    <p>You can return a product
                        within 30 days.</p>
                </div>

                <div className="bnft-box">
                    <div><img src={bnft3} alt="" /></div>
                    <h4>Customer Support</h4>
                    <p>Our customer support <br />
                        is 24/7.</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits