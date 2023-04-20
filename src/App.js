import React from 'react';
import "./App.css"
import Nav from './components/Nav';
import{useState,useEffect,} from 'react';
import axios from "axios";
import {Route,Routes} from 'react-router-dom'
import About from './Views/About';
import Detail from './Views/Detail';
import Home from './Views/Home';
import Form from './components/Form';
import Favorites from './Views/Favorites'
import { useNavigate } from 'react-router-dom';

function App () {

  const [input, setInput] = useState("");
  const [characters, setCharacters] = useState([]);
  const [access,setAccess] = useState(false)
  const username = 'ejemplo@gmail.com'
  const password = 'ejemplo123'
  const navigate = useNavigate();

  // login

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
 }

 // logout

 function logoutHandler() {
  setAccess(false);
  navigate("/");
}
 useEffect(() => {
  !access && navigate('/');
}, [access]);

  function changeHandler(e) {
    e.preventDefault();
    let inputValue = e.target.value;

    setInput(inputValue);
  }

  async function searchHandler(e) {
    e.preventDefault();

    let found = characters.find((character) => character.id === Number(input));

    //* BUSQUEDA POR NOMBRE
    // const result = chars.filter((character) =>
    //   character.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    // );
    // setCharacters(result);

    // //* CON FETCH
    // if (!found) {
    //   fetch(`https://rickandmortyapi.com/api/character/${input}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       if (data.name) {
    //         setCharacters((oldChars) => [...oldChars, data]);
    //       } else {
    //         window.alert("No hay personajes con ese ID");
    //       }
    //     });
    // } else {
    //   alert("el personaje ya fue agregado");
  

    //* CON AXIOS ----> es asincrona --> el punto data siempre se debe agregar como en el fetch
    if (!found) {
      let response = (
        await axios.get(`https://rickandmortyapi.com/api/character/${input}`)
      ).data;

      if (response.name) {
        setCharacters([...characters, response]);
      }
    } else {
      alert("el personaje ya fue agregado");
    } 
  }

  function closeHandler(id) {
    let found = characters.find((character) => character.id === id);
    let deleted = characters.filter((character) => character.id !== found.id);
    setCharacters(deleted);
  }

  function randomHandler() {
    let haveIt = [];

    let random = (Math.random() * 826).toFixed(); // busca el numero completo entre 1 y 826

    random = Number(random); // espeifica que loq ue espero es un numero para evitar que me arroje string y me genera daños

    if (!haveIt.includes(random)) { // verifica que el array que cree no este el numero ramdom
      haveIt.push(random); // si no lo encuentra lo sube al array 
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      alert("Ya agregaste a todos los personajes");
    }
  }

  return (
     <div className='app'>
          < Nav onSearch={searchHandler} onChange={changeHandler} random={randomHandler} logout={logoutHandler} />
          <Routes>
            <Route path='/'element={<Form login = {login}/>}/>
            <Route path='/Home'element={<Home characters={characters} onClose={closeHandler} onClick={randomHandler} onChange={changeHandler} onSearch={searchHandler}/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>} />

          </Routes>
      </div>
      
  )
}

export default App
