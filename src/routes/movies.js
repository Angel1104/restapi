const { Router } = require('express');
const router = Router();


const movies = require('../sample.json')
console.log(movies);

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/',(req, res ) => {
    console.log(req.body);
    res.send('resived');
});

module.exports=router;