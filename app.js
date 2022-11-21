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
app.get('/login.html', (req,res)=>{
    return res.sendFile(__dirname + '/views/login.html');
});
app.get('/product.html', (req,res)=>{
    return res.sendFile(__dirname + '/views/product.html');
});
app.get('/admClient.html', (req,res)=>{
    return res.sendFile(__dirname + '/views/admClient.html');
});
app.get('/shoppingCart.html', (req,res)=>{
    return res.sendFile(__dirname + '/views/shoppingCart.html');
});

app.listen(3000);