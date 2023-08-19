import React from 'react'
import { useState } from 'react'
import livingRoom from "../assets/images/livingroom.jpg"
import livingRoomSet from "../assets/images/livingroomspecialset.jpg"
import livroom from "../assets/images/lvrroom.jpg"

import "../css/special.css"
import { Link } from 'react-router-dom'
const Special = () => {
    
    const [paket, setPaket] = useState("paket1")
    const clickPaket = (choice) => {
        
        setPaket(choice)
        
    }
    
  

    return (
        <div className='special-package'>
            <h1>Special Package</h1>
            <div className="special-boxes">
                <div className="left-side">
                    {paket === "paket1" && <div className="left-side-box" data-aos="zoom-out">
                        <div className="image-left-side-box">
                            <img src={livingRoom} alt="" />
                        </div>
                        <div className="bottom-left-side-box">
                            <div className="name-price">
                                <p>Living Room Family Set</p>
                                <div className="stars">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p className="price-p">$229.99</p>
                            </div>
                            
                        </div>
                    </div>}

                    {
                        paket === "paket2" && <div className="left-side-box" data-aos="zoom-out">
                            <div className="image-left-side-box">
                                <img src={livingRoomSet} alt="" />
                            </div>
                            <div className="bottom-left-side-box">
                                <div className="name-price">
                                    <p>Living Room Full Set</p>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="price-p">$359.99</p>
                                </div>
                                
                            </div>
                        </div>
                    }

                    {
                        paket === "paket3" && <div className="left-side-box" data-aos="zoom-out">
                            <div className="image-left-side-box">
                                <img src={livroom} alt="" />
                            </div>
                            <div className="bottom-left-side-box">
                                <div className="name-price">
                                    <p>Living Room Full Set</p>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="price-p">$423.99</p>
                                </div>
                                
                            </div>
                        </div>
                    }
                </div>

                <div className="right-side">
                    <div className="description">
                        <h4>Description</h4>
                        <p>Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines the appearance, function and quality all together, offering you with the best experience.</p>
                    </div>

                    <div className={`right-side-box ${paket === "paket1" ? "activee" : ""}`} onClick={() => clickPaket("paket1")}>
                        <div className="image-right-side-box">
                            <img src={livingRoom} alt="" />
                        </div>
                        <div className="right-side-right-box">
                            <div className="name-right-side-box">
                                <p>Living Room Family Set</p>
                                <p>$229.99</p>
                            </div>
                            <div className="right-side-stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <Link>See more...</Link>
                        </div>
                    </div>

                    <div className={`right-side-box ${paket === "paket2" ? "activee" : ""}`} onClick={() => clickPaket("paket2")}>
                        <div className="image-right-side-box">
                            <img src={livingRoomSet} alt="" />
                        </div>
                        <div className="right-side-right-box">
                            <div className="name-right-side-box">
                                <p>Living Room Special Set</p>
                                <p>$359.99</p>
                            </div>
                            <div className="right-side-stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <Link>See more...</Link>
                        </div>
                    </div>

                    <div className={`right-side-box ${paket === "paket3" ? "activee" : ""}`} onClick={() => clickPaket("paket3")}>
                        <div className="image-right-side-box">
                            <img src={livroom} alt="" />
                        </div>
                        <div className="right-side-right-box">
                            <div className="name-right-side-box">
                                <p>Living Room Special Set</p>
                                <p>$423.99</p>
                            </div>
                            <div className="right-side-stars">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <Link>See more...</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Special