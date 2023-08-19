import React from 'react'
import "../css/footer.css"
import logo from "../assets/svgs/logo.svg"
import logo1 from "../assets/svgs/facebook.svg"
import logo2 from "../assets/svgs/instagram.svg"
import logo3 from "../assets/svgs/linkedin.svg"
import logo4 from "../assets/svgs/basket.svg"
import logo5 from "../assets/svgs/twitter.svg"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
        
        <div className="footer">
            <div className="first-footer">
            <img src={logo} alt="" className='logo-imbawood' />
                <div className="logolar">
                  <img src={logo1} alt='logo'/>
                  <img src={logo2} alt='logo'/>
                  <img src={logo3} alt='logo'/>
                  <img src={logo4} alt='logo'/>
                  <img src={logo5} alt='logo'/>
                </div>

                <div className="adres">
                    <h5>Address</h5>
                    <p>+994 51 362 29 39</p>
                    <p>Baku, Azerbaijan</p>
                </div>
            </div>

            <div className="section-footer">
                <h5><Link>My Account</Link></h5>

                <Link>Sign In</Link>
                <Link>Register</Link>
                <Link>Order status</Link>
            </div>

            <div className="section-footer">
                <h5><Link>Help</Link></h5>

                <Link>Shipping</Link>
                <Link>Return</Link>
                <Link>Sizing</Link>
            </div>

            <div className="section-footer">
                <h5><Link>Shop</Link></h5>

                <Link>All Products</Link>
                <Link>Bedroom</Link>
                <Link>Dining room</Link>
            </div>

            <div className="section-footer">
                <h5><Link>Legal Stuff</Link></h5>
                <Link>Shipping & Delivery</Link>
                <Link>Terms & Conditions</Link>
                <Link>Privacy & Policy</Link>
            </div>
        </div>

        <div className="copyright">
            <p>Copyright ©2023 Created by Elmir Sultan</p>
        </div>
    </footer>
  )
}

export default Footer