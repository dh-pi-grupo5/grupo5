//Importanto o express
const express = require('express');

//Criando o servidor
const app = express();

//Define a pasta public como sendo a pasta de arquivos estáticos
app.use(express.static('public'));

//Criando a rota para home
app.get('/', (req,res)=>{
    return res.sendFile(__dirname + '/views/index.html');
});

app.get('/produtos', (req,res)=>{
    return res.sendFile(__dirname + '/views/produtos.html');
});
app.get('/admClient', (req,res)=>{
    return res.sendFile(__dirname + '/views/admClient.html');
});
app.get('/carrinho', (req,res)=>{
    return res.sendFile(__dirname + '/views/carrinho.html');
});

//Criando a rota para login 
app.get('/login', (req,res)=>{
    return res.sendFile(__dirname + '/views/login.html');
});

app.get('/checkoutPagamento', (req,res)=>{
    return res.sendFile(__dirname + '/views/checkoutPagamento.html');
});



app.listen(3000);