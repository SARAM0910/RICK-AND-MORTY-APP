
const URL = 'https://rickandmortyapi.com/api/character/'
const axios = require ('axios')

const getCharById = function (res,req) {

    const {id} = req.params

    axios.get(`${URL}${id}`)// esto devuelve una promesa
    .then( (response)=>{
        const {id, name, gender, species, origin, image, status} = response.data;
        const character = {id, name, gender, species, origin, image, status}

        character.id ? res.status(200).json(character):res.status(404).send ('No existe el personaje')

    })
    .catch((error)=>{
        res.status(500).json({mesage:error.mesage})
    })
}

module.exports = getCharById

// antes de express
// const axios = require('axios')


// const getCharById = (res,id) =>{
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)// esto devuelve una promesa
//     .then( (response)=>{
//         const {id, name, gender, species, origin, image, status} =response.data;

//         res.writeHead(200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify({id, name, image, gender, species, status, origin}));
//     })
//     .catch ((error)=>{
//         res.writeHead(500,{"Content-Type" : `text/plain`});
//         res.end (error.message)
//     })
// }

// module.exports = getCharById