import React from "react";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import style from './Detail.module.css'

export default function Detail (props){
    const {id} =useParams();
    
    const [character,setCharacter] = useState({})

    useEffect(() => {
        // fetch(`https://rickandmortyapi.com/api/character/${id}`)
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.name) {
              setCharacter(data);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
      }, [id]);

    return(
        
        <div className={style.detailContainer}>
            <h2 className={style.detailCharacterName}>{character.name}</h2>
        <div className={style.imgDetailContainer}>
          <img className={style.imgDetail} src={character.image} alt={character.name} />
        </div>
        <div className={style.detailAtributes}>
            <h3>Species: {character.species} </h3>
            <h3>Gender: {character.gender}</h3>  
            <h3>Status: {character.status}</h3> 
            <h3>Origin: {character.origin?.name}</h3>
            <h3>Location: {character.location?.name}</h3>
      </div>
      </div>
    )
};