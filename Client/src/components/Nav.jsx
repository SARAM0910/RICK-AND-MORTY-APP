import React from "react";
import style from "./Nav.module.css";
import logo from "../assets/Logo.png";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function Nav ({logout}){

        const location = useLocation();
        if (location.pathname === "/") {
            return null;
          }    

    return(
        <div className={style.NavContainer}>
            <div className={style.logo}>
                <img src={logo} alt="logo" width= 'auto' height='100'/>
            </div>
            <div className={style.linkContainer}>
             <Link className={style.link} id='home' to='/Home'>Home</Link>
             <Link className={style.link} to='/About'>About</Link>
             <Link className={style.link} to='/Favorites'>Favorites</Link>
             <button className={style.buttonRandom} onClick={logout}>Logout</button>
            </div>
        </div>
    )
};

