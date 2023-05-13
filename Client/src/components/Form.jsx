import React from 'react';
import style from './Form.module.css'
import logo from '../assets/Logo.png'
import {validation } from './validation';

export default function Form ({login}){
    const [userData, setUserData] = React.useState({ email: '', password: '' });

    const [errors,setErrors] = React.useState({email: '', password: ''});

    const handleInputChange = (event)=>{

        const property =event.target.name
        const value = event.target.value

        event.preventDefault();

        setUserData ({...userData,[property]:value})
        
        setErrors (validation({...userData,[property]:value}))
    
    }

    function handleSubmit(event) {
        event.preventDefault();
    
        login(userData);
      }


    return(
        
        <form action="Loguin" className={style.formContainer}>
            <img className={style.logo} src={logo} alt="logo" width= 'auto' height='150'/>
            <h2 className={style.welcome}>¡WELCOME!</h2>
            <div className={style.username}>
                <label htmlFor="Username">Username:</label>
                <input className={style.inputForm} 
                size= '30px' 
                placeholder ='Email...' 
                type="text" 
                name='email'
                value={userData.email} 
                onChange={handleInputChange}/>
                <span className={style.errors}>{errors.email}</span>
            </div>
            <div className={style.username}>
                <label htmlFor="Password">Password:</label>
                <input className={style.inputForm} 
                size= '30px' 
                placeholder ='****'
                type="password" 
                name='password' 
                value={userData.password}
                onChange={handleInputChange}/>
                <span className={style.errors}>{errors.password}</span>
            </div>
            <button className={style.loginButton} type='submit' onClick={handleSubmit}>Login</button>
        </form>
        
    )
}