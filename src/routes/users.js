const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');
//usamos metodo async await para que espeere el fetch
router.get('/', async(req,res)=>{
    //fetch hace peticiones a la direccion indicada
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
  //convierte la respuesta en un json
    const users = await  respuesta.json();
    res.json(users);
   res.send('users')
});

module.exports=router;