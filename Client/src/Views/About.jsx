import React from 'react';
import style from './About.module.css';
import imagen from '../assets/ImagenDeAbout.png'

export default function about () {
    return (
        <div className={style.aboutcontainer}>
            <img src={imagen} alt= 'portal' width= 'auto' height='250px'/>
            <div className={style.aboutCreator} >
                <h1>
                Designed by: Sara C. Marulanda R.
                </h1>
                <p className={style.parrafoAC}>
                I'm a fullstack web developer student at Henry academy and I enjoy doing these developments for you guys.
                </p>
            </div>
            <div className={style.aboutApp}>
                <h1>About App</h1>
                <p className={style.parrafoAA}>
                This aplication content information about 826 characters of the famous serie Rick and Morty.
                </p>
                <p className={style.parrafoAA}>
                The application was designed so that you have fun consulting about them.
                </p>

                <p className={style.parrafoAA}>
                ¡Go ahead!
                </p>
            </div>

        </div>

    )
}