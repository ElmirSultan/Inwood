import React from 'react'
import chair1 from "../assets/svgs/chair1.svg"
import chair2 from "../assets/svgs/chair2.svg"
import chair3 from "../assets/svgs/chair3.svg"
import chair4 from "../assets/svgs/chair4.svg"
import "../css/products.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper";
// Import Swiper styles
import "swiper/css";
import {useNavigate} from "react-router-dom"
const Products = () => {
    const navigate = useNavigate();
    return (
        <div className='popular-products'>
            <h1>Popular Products</h1>
            <div className="slide-section">
               

                <div className="slidee">
                <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            324: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 10,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                          }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                     
                     <SwiperSlide>
                        <div className="product-box bir">
                            <div className="top-side">
                               <img src={chair1} alt="" />
                            </div>
                            <div className="bottom-side">
                                <h5>Armchair</h5>
                                <p className='about-product'>Light single chair</p>
                                <p className='price-product'>$145</p>
                            </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                     <div className="product-box iki">
                            <div className="top-side">
                               <img src={chair2} alt="" />
                            </div>
                            <div className="bottom-side">
                                <h5>Premium Sofa</h5>
                                <p className='about-product'>Light single chair</p>
                                <p className='price-product'>$145</p>
                            </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                     <div className="product-box uc">
                            <div className="top-side">
                               <img src={chair3} alt="" />
                            </div>
                            <div className="bottom-side">
                                <h5>Minimal Sofa</h5>
                                <p className='about-product'>Light single chair</p>
                                <p className='price-product'>$145</p>
                            </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>
                     <div className="product-box dort">
                            <div className="top-side">
                               <img src={chair4} alt="" />
                            </div>
                            <div className="bottom-side">
                                <h5>Dining Chair</h5>
                                <p className='about-product'>Light single chair</p>
                                <p className='price-product'>$145</p>
                            </div>
                        </div>
                     </SwiperSlide>
                     

                    </Swiper>
                </div>

                <button onClick={() => navigate("/products")}>Explore All Items <i className="bi bi-arrow-right"></i></button>
            </div>
        </div>
    )
}

export default Products