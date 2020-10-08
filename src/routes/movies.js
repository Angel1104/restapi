const { Router, json } = require('express');
const router = Router();
const underscore = require('underscore');

// importar desde sample los datos
const movies = require('../sample.json')
//el get sera la const movies que tiene toda la info
router.get('/', (req, res) => {
    res.json(movies);
});

//agregar - guadar -post
router.post('/',(req, res ) => {

    const {titulo,director,year,duracion,rating} = req.body;
    if(titulo && director && year && duracion && rating ){
        const id =movies.length +1 ;//su id aumenta 1
        const nexMovie = {...req.body , id};//guardar la pelicula en la base desde el rq.body
        movies.push(nexMovie);// lo guardamos en sample con el pusheo
        res.json(movies);

        res.json('posi guardado');
    }else{
        res.status(500).json({error:"error te falta algun dato loco"});
    }
});




    //eliminar delete chau es
router.delete('/:id',(req,res) =>{
    const{id} = req.params;//nos dara el id de la pelicula y lo guardamoss
    //de la libreria usamos each que sirve para recorrer arreglos
    underscore.each(movies,(movie, indice)=>{//movies indice tienen los datos de un apelicula
        if(movie.id==id){//comparamos id 
            movies.splice(indice);//con splice borramos todo el indice que es la pelicula
        }
    });
    res.send(movies);//envia arreglo sin esa peli
});
  

// actualizar papa :V 
router.put('/:id', (req,res)=>{
    const{id} = req.params;
    const {titulo,director,year,duracion,rating} = req.body;
    if(titulo && director &&year &&rating &&duracion){
        underscore.each(movies,(movie, indice)=>{
            if(movie.id == id ){
                movie.titulo = titulo;
                movie.director=director;
                movie.duracion=duracion;
                movie.year=year;
                movie.rating=rating;
            }
        });
        res.json(movies);
        res.status(200);
    }else{
        res.status(400).json({error:"ingresar todos los datos "});
    }
});
    
module.exports=router;