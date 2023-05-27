
import axios from "axios"
export const ADD_CHARACTERS ='ADD_CHARACTERS'
export const DELETE_CHARACTERS = 'DELETE_CHARACTERS'
export const ORDER ='ORDER'
export const FILTER ='FILTER'
export const RESET = 'RESET'


export const addCharacter = (character) => {
  
   return async (dispatch)=>{

    try {
        let endpoint = 'http://localhost:3001/rickandmorty/fav';
        let response = await axios.post(endpoint, character)
        dispatch({
         type: ADD_CHARACTERS,
         payload: response.data,
      })

    } catch (error) {

        throw Error(error.message)
    }
      
   }
  

   //  const endpoint = 'http://localhost:3001/rickandmorty/fav';
   //  return (dispatch) => {
   //     axios.post(endpoint, character).then(({ data }) => {
   //        return dispatch({
   //           type: ADD_CHARACTERS,
   //           payload: data,
   //        });
   //     });
   //  };
 };

 export const deleteCharacter =(id)=>{
    
    return async (dispatch) => {

        try {
            let endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
            let response= await axios.delete(endpoint)
            dispatch({
             type: DELETE_CHARACTERS,
             payload: response,
           })
            
        } catch (error) {

            throw error(error.message)
        }
    
      }
    }
  

// export const deleteCharacter =(id)=>{
//     const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
//       return (dispatch) => {
//          axios.delete(endpoint).then(({ data }) => {
//             return dispatch({
//                type: DELETE_CHARACTERS,
//                payload: data,
//          });
//          });
//       }; 
//    };

export const filterCards =(gender) =>{
    return{ type:FILTER, payload:(gender)}
};

export const orderCards = (order) => {
    return{ type:ORDER, payload: (order)}
};

export const reset = () =>{
    return{type:RESET}
}