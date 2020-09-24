const express = require('express');
const morgan = require('morgan');
const app = express();


//setting - configuraciones
app.set('port', process.env.PORT || 7000);
app.set('json spaces0, 2 ');

//midlwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes - rutas
app.use(require('./routes/index.js'));
app.use('/api/movies',require('./routes/movies.js'));
app.use('/api/users',require('./routes/users.js'));

//iniciando el servidor- starting the server
app.listen(app.get('port'), ()=>{
    console.log(`server on port ${app.get('port')}`);
});