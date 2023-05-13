
// server con express

const express = require ("express"); 
const router = require("./routes");
const server = express ();
const PORT = 3001

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json())

 server.use('/rickandmorty',router)

server.listen (PORT, ()=>{
    console.log('Server raised in port: ' + PORT)
})




// HW PROMISES
// const http = require('http');
// const PORT=3001
// const getCharById = require('./controllers/getCharById')

// http.createServer((req,res)=>{

//     const {url}=req;

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     HW web server:

//     if(url.includes('/rickandmorty/character')){
//         const id= parseInt(url.split('/').pop())// asi obtengo el ultimo elemneto de la URL (id) y lo convierto a numero

//         const character = data.find(char => char.id === id)

//         if (character){
//             res.writeHead(200, { "Content-Type": "text/plain" })
//             res.end(JSON.stringfy(character))
//         }else{
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('Character not found')
//         }
    
//         HW PROMISES:

//         if(url.includes('/rickandmorty/character')){
//             const id= parseInt(url.split('/').pop())
//             getCharById(res, id)
//         }

    
// }).listen(PORT, 'localhost');