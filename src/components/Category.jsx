import React from 'react'
import "../css/category.css"
import { useNavigate } from 'react-router-dom'
import bedroomImage from "../assets/images/bedroom.jpg"
import dinningRoom from "../assets/images/diningroom.jpg"
import workingSpace from "../assets/images/workspace.jpg"
import meetingRoom from "../assets/images/meetingrrom.jpg"
import livingRoom from "../assets/images/livingroom.jpg"
import kitchen from "../assets/images/kitchen.jpg"
const Category = () => {
    const goCateg = useNavigate()
    return (
        <div className='category'>
            <h1>Explore by Category</h1>
            <div className="category-boxes">
                <div className="input-side">
                    <div className='search-input'>
                        <i className="bi bi-search"></i>
                        <input type="search" placeholder='Search...' />
                    </div>

                    <div className="rooms">
                        <p>Bedroom</p>
                        <p>Dining Room</p>
                        <p>Meeting Room</p>
                        <p>Workspace</p>
                        <p>Living Room</p>
                        <p>Kitchen</p>
                        <p>Living Space</p>
                        <p>Laundry Room</p>
                        <p>Hall</p>
                        <p>Game Room</p>
                        <p>Cinema Room</p>
                        <p>Guest Room</p>
                        <p>Study Room</p>
                        <p>Bathroom</p>
                    </div>

                    <button onClick={()=> goCateg("/categories")}>All Categories <i className="bi bi-arrow-right"></i></button>
                </div>

                <div className="room-boxes">
                    <div className="room-box">
                        <img src={bedroomImage} alt="" />
                    </div>

                    <div className="room-box">
                        <img src={dinningRoom} alt="" />
                    </div>

                    <div className="room-box">
                        <img src={workingSpace} alt="" />
                    </div>

                    <div className="room-box">
                        <img src={meetingRoom} alt="" />
                    </div>

                    <div className="room-box">
                        <img src={livingRoom} alt="" />
                    </div>

                    <div className="room-box">
                        <img src={kitchen} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category