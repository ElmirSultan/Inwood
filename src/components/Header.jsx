import React from 'react'
import "../css/header.css"
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaWindowClose } from 'react-icons/fa'
import logo from "../assets/svgs/logo.svg"
import { FaBars } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Header = ({ size, toggleBasket }) => {
  const overlayRef = useRef();
  
  function openOverlay(e){
  const clickElement = e.target
   if(clickElement.classList.contains("bars-icon")){
  overlayRef.current.classList.add("aktiv");
  document.querySelector(".navbar").style.visibility = "hidden";
  }
  }
  const closeOverlay = (e) =>{
    const clickElement = e.target;
     if(clickElement.classList.contains("uparrow")){
       overlayRef.current.classList.remove("aktiv"); 
       document.querySelector(".navbar").style.visibility = "visible";
     }
  }

  function sectionTikla(e){
    const clickElement = e.target
    if(clickElement.classList.contains("navlink")){
      overlayRef.current.classList.remove("aktiv");
      document.querySelector('.navbar').style.visibility = "visible"
    }
  }
  const navigate = useNavigate()
  return (
    <>
      <header>
        <div className='overlay' ref={overlayRef}>
         
          <div className='nav-links'>
            <Link to="/" className="navlink" onClick={sectionTikla} >Home</Link>
            <Link to="/products" className="navlink" onClick={sectionTikla} >Products</Link>
            <Link to="/categories" className="navlink" onClick={sectionTikla} >Categories</Link>
            <Link to="/aboutus" className="navlink" onClick={sectionTikla} >About</Link>
            <Link to="/contactus" className="navlink" onClick={sectionTikla} >Contact Us</Link>
          </div>
          <button className='uparrow' onClick={closeOverlay}><FaWindowClose className='windowclose' /></button>
          </div>

          <nav className='navbar'>
            <div className="logo">
              <img src={logo} alt="logo" onClick={()=> navigate("/")} />
            </div>

            <div className="nav-links">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/products"}>Products</NavLink>
              <NavLink to={"/categories"}>Categories</NavLink>
              <NavLink to={"/aboutus"}>About</NavLink>
              <NavLink to={"/contactus"}>Contact Us</NavLink>
            </div>

            <div className="icons">
              <p className='my-basket' id='my-basket' onClick={toggleBasket}>
                <i className="bi bi-cart-fill"></i>
                {size > 0 && <span className="basket-count">{size}</span>}
              </p>
              <i className="bi bi-person-circle"></i>
            </div>

            
              <FaBars className='bars-icon' onClick={openOverlay} />
            
          </nav>


      </header>

    </>
  )
}

export default Header