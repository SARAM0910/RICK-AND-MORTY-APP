
import { ADD_CHARACTERS,DELETE_CHARACTERS,ORDER,FILTER, RESET } from "./actions";

const initialState={ // estado inicial
    myFavorites:[],
    allCharacters:[],
}


const rootReducer = (state =initialState,action) =>{ 
    switch (action.type){
        case ADD_CHARACTERS:
            return{
                ...state,
                myFavorites:[...state.allCharacters,action.payload],
                allCharacters: [...state.allCharacters,action.payload]
            }
        case DELETE_CHARACTERS:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((character)=>character.id !== action.payload),
                allCharacters: state.myFavorites.filter((character)=>character.id !== action.payload)
            }
        case FILTER:
            return{
                ...state,
                myFavorites:state.allCharacters.filter((character)=>character.gender===action.payload) 
            }
        case ORDER:
            let ordenados;
             if (action.payload === "Ascendente") {
               ordenados = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
            } else if (action.payload === "Descendente") {
              ordenados = state.myFavorites.sort((a, b) => (b.id < a.id ? -1 : 1));
            }
            return {
                ...state,
                myFavorites: [...ordenados],
            };
        case RESET:
            return{
                ...state,
                myFavorites:state.allCharacters
            }
     default:
      return {...state} 
    } 
};

export default rootReducer;