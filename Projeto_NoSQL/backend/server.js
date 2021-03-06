const express = require ('express');
const MongoClient = require('mongodb').MongoClient;
const ejs = require('ejs');
const cors = require ('cors');
const bodyParser = require('body-parser');

const server = express();
server.set('view engine', 'ejs');
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors ());

// Connection URL
const url = 'mongodb://localhost:27017/DeliciousCakes';

// Cria a conexão
MongoClient.connect(url, (err, client)=> {
        if(err) return console.log(err) 
    db = client.db('DeliciousCakes');

    server.listen(3000, ()=>{
    console.log('Server ligado!');
    });
});

server.get('/lojas', async (req, res) => {
    res.render('lojas.ejs')
});

server.get('/contato', async (req, res) => {
    res.render('contato.ejs')
});

server.get('/', async (req, res) => {
    res.render('historia.ejs')
});

server.get('/historia', async (req, res) => {
    res.render('historia.ejs')
});

server.get('/bolos', async (req, res) => {
    res.render('bolos.ejs')
});

server.get('/cadastro', async (req, res) =>{
    res.render('cadastro.ejs')
});

server.get('/bolos', async (req, res) => {
    db.collection('Produtos').find({}).toArray((err, results)=>{
        if(err) return console.log(err)
        res.render('bolos.ejs', {DeliciousCakes: results})
});
});

server.post('/cadastro', async (req, res) => {
    db.collection('Produtos').save(req.body, (err)=>{
        if(err) return console.log(err)
        console.log('Cadastro realizado com sucesso!');
        res.redirect('/cadastro')
    });
});