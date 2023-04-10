import React from 'react';
import style from './Form.module.css'
import logo from '../assets/Logo.png'

export default function Form (){
    return(
        
        <form action="Loguin" className={style.formContainer}>
            <img className={style.logo} src={logo} alt="logo" width= 'auto' height='150'/>
            <h2 className={style.welcome}>WELCOME!</h2>
            <div className={style.username}>
                <label htmlFor="Username">Username:</label>
                <input className={style.inputForm} size= '30px' placeholder ='Email...' type="text" name='Username' />
            </div>
            <div className={style.username}>
                <label htmlFor="Password">Password:</label>
                <input className={style.inputForm} size= '30px' type="password" name='Password' />
            </div>
            <button className={style.loginButton} type='submit'>Loguin</button>
        </form>
        
    )
}