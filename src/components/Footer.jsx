import React from 'react'
import "../css/footer.css"
import logo from "../assets/svgs/logo.svg"
import logo1 from "../assets/svgs/facebook.svg"
import logo2 from "../assets/svgs/instagram.svg"
import logo3 from "../assets/svgs/linkedin.svg"
import logo4 from "../assets/svgs/basket.svg"
import logo5 from "../assets/svgs/twitter.svg"
const Footer = () => {
  return (
    <footer>
        
        <div className="footer">
            <div className="first-footer">
            <img src={logo} alt="" className='logo-imbawood' />
                <div className="logolar">
                  <img src={logo1}/>
                  <img src={logo2}/>
                  <img src={logo3}/>
                  <img src={logo4} />
                  <img src={logo5}/>
                </div>

                <div className="adres">
                    <h5>Address</h5>
                    <p>+994 51 362 29 39</p>
                    <p>Baku, Azerbaijan</p>
                </div>
            </div>

            <div className="section-footer">
                <h5><a href="#">My Account</a></h5>

                <a href="#">Sign In</a>
                <a href="#">Register</a>
                <a href="#">Order status</a>
            </div>

            <div className="section-footer">
                <h5><a href="#">Help</a></h5>

                <a href="#">Shipping</a>
                <a href="#">Return</a>
                <a href="#">Sizing</a>
            </div>

            <div className="section-footer">
                <h5><a href="#">Shop</a></h5>

                <a href="#">All Products</a>
                <a href="#">Bedroom</a>
                <a href="#">Dining room</a>
            </div>

            <div className="section-footer">
                <h5><a href="#">Legal Stuff</a></h5>

                <a href="#">Shipping & Delivery</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy & Policy</a>
            </div>
        </div>

        <div className="copyright">
            <p>Copyright ©2023 Created by Elmir Sultan</p>
        </div>
    </footer>
  )
}

export default Footer