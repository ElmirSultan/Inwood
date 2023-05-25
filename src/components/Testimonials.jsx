import React from 'react'
import Commentbox from './Commentbox'
import "../css/testimonials.css"
import commentJson from "../assets/json/comments.json"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Navigation } from "swiper";
const Testimonials = () => {
    return (
        <div className='testimonials'>
            <h1>Testimonials</h1>
            <p className='p-text'>Over 15,000 happy customers.</p>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
               
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    commentJson.map(commentqutu => (
                        <SwiperSlide key={commentqutu.id}>
                            <Commentbox
                                imageOfPerson={commentqutu.imageOfPerson}
                                name={commentqutu.nameOfPerson}
                                comment={commentqutu.comment}
                                job={commentqutu.job} />

                        </SwiperSlide>


                    ))
                }
            </Swiper>

        </div>
    )
}

export default Testimonials