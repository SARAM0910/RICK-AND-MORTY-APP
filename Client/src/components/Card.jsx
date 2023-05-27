import React, { useState } from 'react';
import style from './Card.module.css';
import { addCharacter,deleteCharacter} from '../redux/actions'
import { useNavigate } from 'react-router-dom';
import { connect} from 'react-redux';
import { useEffect } from 'react';

<link rel="preconnect" href="https://fonts.googleapis.com"/>;
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>;
<link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap" rel="stylesheet"/>;



 function Card(props) {  
   const navigate = useNavigate()
   const {character, myFavorites, onClose} = props;
   const [closeBtn, setCloseBtn] = useState(true);
   const [isFav,setIsFav]=useState(false)
  

   function navigateHandler (){
      navigate (`/Detail/${character.id}`)
   }

  function handleFavorite (){
   if (isFav){
      setIsFav(false)
      if (character && character.id) {
         props.deleteCharacter(character.id)
      }
   }else{
      setIsFav (true)
      props.addCharacter(character)
   }
  }
  
   useEffect(() => {
     if (myFavorites) {
       myFavorites.forEach((fav) => {
         if (fav.id === character.id) {
           setIsFav(true);
         }
       });
     }
   }, [myFavorites, character.id]);

useEffect(() => {
   if (!onClose) {
     setCloseBtn(false);
   }
 }, [onClose]);

   return (
      <div className= {style.cardContainer}>

{closeBtn ? (
          <button className={style.closeButton} onClick={() => onClose(character.id)}>X</button>
        ) : null}
         
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
                 ) : (
                 <button onClick={handleFavorite}>🤍</button> )
         } 
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

const mapDispatchToProps = (dispatch) => {
   return {
     addCharacter: (character) => dispatch(addCharacter(character)),
 
     deleteCharacter: (characterId) => dispatch(deleteCharacter(characterId)),
   };
 };
 
 const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
 };


 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);