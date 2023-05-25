import React from 'react'
import aboutus from "../assets/images/about.jpg"
import "../css/about.css"
import Typed from 'react-typed';
const About = () => {
  return (
    <section className='about-us'>
      <h1>About Us</h1>
      <div className='picture'>
        <img src={aboutus} alt="" />
      </div>

      <div className="achievements">
        <div className="first-ach">
          <Typed className='type'
            strings={[
              '<h3>OUR ACHIEVEMENTS</h3>'
            ]}
            // onComplete={(self) => self.cursor.remove()}  
            typeSpeed={80}
            // backSpeed={20}

            showCursor={false}
          >

          </Typed>
          
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
           Necessitatibus illo deserunt possimus excepturi fugiat, <br />
            dolorum non ullam voluptatum iusto modi odio atque repellendus <br />
            pariatur saepe nam molestiae nulla libero praesentium.</p>
        </div>

        <div className="second-ach">
          <h5>AWARDS</h5>
          <ul>
            <li>Lorem ipsum dolor, Italy 2020</li>
            <li>Adipiscing elit, France 2019</li>
            <li>Ut enim adni, Cape Town 2019</li>
            <li>Tempor incint ut, Rome 2019</li>
            <li>Labore et dolagna, Tokio 2018</li>
          </ul>
        </div>

        <div className="third-ach">
          <h5>RECOGNITIONS</h5>
          <ul>
            <li>Lorem ipsum dolor, Italy 2020</li>
            <li>Adipiscing elit, France 2019</li>
            <li>Ut enim adni, Cape Town 2019</li>
            <li>Tempor incint ut, Rome 2019</li>
            <li>Labore et dolagna, Tokio 2018</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About