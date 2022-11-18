//Importanto o express
const express = require('express');

//Criando o servidor
const app = express();

//Define a pasta public como sendo a pasta de arquivos estáticos
app.use(express.static('public'));

//Criando a rota para home
app.get('/home', (req,res)=>{
    return res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000);