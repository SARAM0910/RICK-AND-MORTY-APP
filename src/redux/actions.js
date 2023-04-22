

export const ADD_CHARACTERS ='ADD_CHARACTERS'
export const DELETE_CHARACTERS = 'DELETE_CHARACTERS'
export const ORDER ='ORDER'
export const FILTER ='FILTER'
export const RESET = 'RESET'

export const addCharacter = (character)=>{
    return {type: ADD_CHARACTERS, payload:(character)};
};

export const deleteCharacter =(id)=>{
    return { type:DELETE_CHARACTERS, payload:(id)};
};

export const filterCards =(gender) =>{
    return{ type:FILTER, payload:(gender)}
};

export const orderCards = (order) => {
    return{ type:ORDER, payload: (order)}
};

export const reset = () =>{
    return{type:RESET}
}