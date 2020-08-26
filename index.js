const express = require('express');
const morgan = require('morgan');
const app = express();
//Settings
app.set('appName','Fazt Express');
app.set('port',3000);
app.set('view engine','ejs');
//Middlewares
app.use(express.json());
app.use(morgan('dev'));

//Routes
/*app.all('/user', (req, res, next) => {
    console.log('Pase por aqui');
    next();
});*/
//Motor de plantilla
app.get('/', (req, res) => {
    const data = [{name: 'Gera'}, {name:'Wendy'}, {name:'Ivan'}, {name: 'Paula'}];
    res.render('index.ejs', {people: data});
});
app.get('/user',(req, res) => {
    res.json({
        username: 'Gerardo',
        lastname: 'Reyes'
    });
});
app.post('/user/:id', (req, res) =>{
    console.log(req.body);
    console.log(req.params);
    res.send('Petición POST recibida');
});
app.put('/user/:id', (req, res) =>{
    console.log(req.body);
    console.log(req.params);
    res.send(`El usuario ${req.params.id} fue actualizado`);
});
app.delete('/user/:userId', (req, res) =>{
    res.send(`El usuario ${req.params.userId} fue eliminado`);
});

app.use(express.static('public'));

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Servidor en el puerto: ', app.get('port'));
});