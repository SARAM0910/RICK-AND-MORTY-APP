import React from "react";
import Cards from "../components/Cards";
import style from "./Home.module.css"
import SearchBar from "../components/SearchBar";

export default function Home ({characters,onClose,onClick,onChange,onSearch}){
    return (
        <div className={style.home}>
          <div className={style.homeBar}>
          <SearchBar onSearch={onSearch} onChange={onChange}/>
          <button className={style.buttonRandom} onClick={onClick}>Add Random</button>
          </div>
             <Cards characters={characters} onClose={onClose}/>
        </div>
     )
}