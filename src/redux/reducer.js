
import { ADD_CHARACTERS,DELETE_CHARACTERS } from "./actions";

const initialState={ // estado inicial
    myFavorites:[],
}


const rootReducer = (state =initialState,action) =>{ 
    switch (action.type){
        case ADD_CHARACTERS:
            return{
                ...state,
                myFavorites:[...state.myFavorites,action.payload]
            }
        case DELETE_CHARACTERS:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((character)=>character.id !== action.payload)
            }
     default:
      return {...state} 
    } 
};

export default rootReducer;