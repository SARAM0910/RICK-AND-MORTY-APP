

export const ADD_CHARACTERS ='ADD_CHARACTERS'
export const DELETE_CHARACTERS = 'DELETE_CHARACTERS'

export const addCharacter = (character)=>{
    return {type: ADD_CHARACTERS, payload:(character)};
};

export const deleteCharacter =(id)=>{
    return { type:DELETE_CHARACTERS, payload:(id)};
};