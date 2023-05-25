import React, { useState } from 'react'
import "../css/allcategories.css"
import categoryJson from "../assets/json/categories.json"
import Categorycard from './Categorycard'
const Allcategories = ({handleClick}) => {
  
  const [categ, setCateg] = useState("bedroom")
  const selectCateg = (example) => {
    setCateg(example)
  }


  return (
    <section className='all-categories'>
      <h1>Categories</h1>
      <div className="categ-box">
        <div className="left-side">
          <p onClick={() => selectCateg("bedroom")} className={`${categ === "bedroom" ? "addaktiv" : ""}`}>Bedroom</p>
          <p onClick={() => selectCateg("diningroom")} className={`${categ === "diningroom" ? "addaktiv" : ""}`}>Dining Room</p>
          <p onClick={() => selectCateg("meetingroom")} className={`${categ === "meetingroom" ? "addaktiv" : ""}`}>Meeting Room</p>
          <p onClick={() => selectCateg("kitchen")} className={`${categ === "kitchen" ? "addaktiv" : ""}`}>Kitchen</p>
          <p onClick={() => selectCateg("laundryroom")} className={`${categ === "laundryroom" ? "addaktiv" : ""}`}>Laundry Room</p>
          <p onClick={() => selectCateg("hall")} className={`${categ === "hall" ? "addaktiv" : ""}`}>Hall</p>
          <p onClick={() => selectCateg("gameroom")} className={`${categ === "gameroom" ? "addaktiv" : ""}`}>Game Room</p>
          <p onClick={() => selectCateg("cinemaroom")} className={`${categ === "cinemaroom" ? "addaktiv" : ""}`}>Cinema Room</p>
          <p onClick={() => selectCateg("studyroom")} className={`${categ === "studyroom" ? "addaktiv" : ""}`}>Study Room</p>
          <p onClick={() => selectCateg("bathroom")} className={`${categ === "bathroom" ? "addaktiv" : ""}`}>Bathroom</p>
        </div>
        <div className="right-side">
          {categ === 'bedroom' &&
            categoryJson.bedroom.map((item) => (
              <Categorycard key={item.id} item={item} handleClick={handleClick} />
            ))}
          {categ === 'diningroom' &&
            categoryJson.diningroom.map((item) => (
              <Categorycard key={item.id} item={item}  handleClick={handleClick} />
            ))}
          {categ === 'meetingroom' &&
          categoryJson.meetingroom.map((item) => (
            <Categorycard key={item.id} item={item}  handleClick={handleClick} />
          ))}
          {categ === 'kitchen' && 
          categoryJson.kitchen.map((item) => (
            <Categorycard key={item.id} item={item}  handleClick={handleClick} />
          ))}
          {categ === 'laundryroom' && 
          categoryJson.laundryroom.map((item) => (
            <Categorycard key={item.id} item={item}  handleClick={handleClick} />
          ))}
          {categ === 'hall' &&
          categoryJson.hall.map((item) =>(
            <Categorycard key={item.id} item={item}  handleClick={handleClick} />
          ))}
          {categ === 'gameroom' && 
          categoryJson.gameroom.map((item) => (
            <Categorycard key={item.id} item={item}  handleClick={handleClick} />
          ))}
          {categ === 'cinemaroom' &&
          categoryJson.cinemaroom.map((item) => (
            <Categorycard key={item.id} item={item}  handleClick={handleClick} />
          ))}
          {categ === 'studyroom' &&
          categoryJson.studyroom.map((item) => (
            <Categorycard key={item.id} item={item}  handleClick={handleClick} />
          ))}
          {
            categ === 'bathroom' &&
            categoryJson.bathroom.map((item) => (
              <Categorycard key={item.id} item={item}  handleClick={handleClick} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Allcategories