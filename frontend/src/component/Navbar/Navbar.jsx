import React from "react";
import { useState } from "react";
import "./Navbar.css";
import {Link}  from "react-router-dom"
import logo from "../Assest/logo.png";
import cart_icon from "../Assest/cart_icon.png";
import {useContext} from  "react"
import { ShopContext } from "../../context/shopContext";


const Navbar = () => {

    const [menu,setMenu]=useState("shop")
    const {getTotalCartItems}= useContext(ShopContext)

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>THREADORA</p> 
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/' >Shop</Link>{menu=="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu=="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to= "/womens">Women</Link>{menu=="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to="/kids">Kids</Link>{menu=="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">
            {getTotalCartItems()}
        </div>

      </div>
    </div>
  );
};
export default Navbar;
