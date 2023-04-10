import React from 'react';
import style from './Card.module.css'
import { useNavigate } from 'react-router-dom';
<link rel="preconnect" href="https://fonts.googleapis.com"/>;
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>;
<link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap" rel="stylesheet"/>;


export default function Card(props) {
   const navigate = useNavigate()
   const {character, onClose} = props;

   function navigateHandler (){
      navigate (`/Detail/${character.id}`)
   }

   return (
      <div className= {style.cardContainer}>
         <button className={style.closeButton} onClick={() => onClose(character.id)}>X</button>
         <h2 className={style.cardName}>Name: {character.name} </h2>
         <div className={style.imageContainer}>
         <img className={style.img} src = {character.image} alt={character.name} onClick={navigateHandler}/>
         </div>
         <div className={style.cardAtributes}>
          <h2>Id: {character.id}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
         </div>
      </div>
      
   )
}