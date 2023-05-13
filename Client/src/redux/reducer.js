
import { ADD_CHARACTERS,DELETE_CHARACTERS,ORDER,FILTER, RESET } from "./actions";

const initialState={ // estado inicial
    myFavorites:[],
    allCharacters:[],
}


const rootReducer = (state =initialState,action) =>{ 
    switch (action.type){
        case ADD_CHARACTERS:
            const add = [...state.myFavorites,action.payload]
            return { ...state, 
                myFavorites: [...add], 
                allCharacters: [...add]
            }
        case DELETE_CHARACTERS:
            return { ...state, 
                myFavorites: action.payload,
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