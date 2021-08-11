const express = require('express');
const app = express();
const rutaMain = require('./routers/main');

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use('/', rutaMain);

app.listen(3000, ()=>{
    console.log('Servidor funcionando')
})