
const URL = 'https://rickandmortyapi.com/api/character/'
const axios = require ('axios')

const getCharById = async (req, res) => {

    let {id} = req.params

    try {
        let response = (await axios.get(`${URL}${id}`)).data

        const character = {
            id: response.id,
            name: response.name,
            image: response.image,
            gender: response.gender,
            status: response.status,
        }
         res.status(200).json(character)
        
    } catch (error) {
        res.status(500).json({mesage:error.mesage})
        
    }
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