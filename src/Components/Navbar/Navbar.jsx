import React, { useContext, useRef, useState } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { HomeContext } from "../../Context/HomeContext";
import nav_dropdoen from '../Assets/circle-chevron-down-solid.svg';
const Navbar = () => {
    const [menu,setMenu] = useState("Home")
    const {getTotalCartItems} = useContext(HomeContext)

    const menuRef = useRef();
    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo}/>
                <p>Ibt Ecommerce</p>

            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={nav_dropdoen}/>
            <ul ref={menuRef} className="nav-meu">
                 <li onClick={() => {setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="home" ? <hr/>: <></>}</li>
                <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu==="mens" ? <hr/>: <></>}</li>
                <li onClick={() => {setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link> {menu==="womens" ? <hr/>: <></>}</li>
                <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids" ? <hr/>: <></>}</li>
            </ul>
            <div className="nav-login-cart">
               <Link to='/login'><button>Login</button></Link> 
              <Link to='/cart'> <img src={cart_icon} /></Link> 
                <div className="nav-cart-counter">{getTotalCartItems()}</div>
            </div>

        </div>
    )
}

export default Navbar