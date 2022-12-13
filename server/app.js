//Requiring module
const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');
const cors = require('cors');
//Creating express object
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin:'*'
}));



//Handling GET request

//app.get('/', (req, res) => {
//res.send('A simple Node App is' + 'running on this server')
//res.end()
//})

app.get('/', function (req, res, next) {
    console.log('A API está rodando' + 'nesse servidor');
    next();
  }, function (req, res) {
    res.send('Hello World!');
    res.end();
  });



// CONSULTA PRODUTOS.
app.get('/produtos', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from produto', res);
    })
    
    //CONSULTA PRODUTO PELO ID.
    app.get('/produtos/:id?', (req, res) => {
        let filter = '';
        if(req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
        return connect.execSQLQuery('select * from produto' + filter, res);
    })
    
    //MÉTODO PUT - ALTERAR PRODUTO
    app.put('/produtos/:id', (req, res) =>{
        res.setHeader("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        return connect.execSQLQuery("update produto set nome='"+req.body.nome+"', capacidade='"+req.body.capacidade+"', valor='"+req.body.valor+"' where id="+req.params.id, res);
        })
    
    //MÉTODO POST - INCLUIR produto
    app.post('/produtos/', (req, res) =>{
        res.setHeader("Access-Control-Allow-Origin","*");
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        return connect.execSQLQuery("insert into produto (nome, capacidade, valor) value('"+req.body.nome+"', '"+req.body.capacidade+"', '"+req.body.valor+"')", res);
        })
      
    //MÉTODO DELETE - DELETAR Produto
        app.delete('/produtos/:id', (req, res) =>{
        return connect.execSQLQuery('delete from produto where id=' + parseInt(req.params.id), res);
        })
    
    //cadastro de usuario
//router.post('/users', (req, res) => {
  //  res.setHeader("Access-Control-Allow-Origin", "*");
    //res.header('Access-Control-Allow-Methods', 'POST');
   //return connect.execSQLQuery("insert into user (email, senha) value('" + req.body.email + "', '" + req.body.senha + "')", res);
   // })

//router.post('/usuarios/login', (req, res) => {
  //  res.setHeader("Access-Control-Allow-Origin", "*");
    //res.header('Access-Control-Allow-Methods', 'POST');

//})


//port Number
const PORT= process.env.PORT||5000;

//Server Setup
app.listen(PORT, console.log(
    `Server started on port: ${PORT}`
));