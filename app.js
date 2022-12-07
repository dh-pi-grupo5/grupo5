// 1 - Importar o express
const express = require('express');
const path = require('path');

// 2 - Criar o servidor
const servidor = express();

// Define a pasta public como sendo a pasta arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')))

// 3 - Definir de uma rota neste servidor
// endereço, método, função callback (a ação que o servidor vai realizar quando requerimento do usuario chegar)
servidor.get('/', (req, res)=>{
    return res.sendFile(__dirname + "/views/index.html");
});

servidor.get('/carrinho',(req, res)=>{
    return res.sendFile(__dirname + "/views/carrinho.html");
});

servidor.get('/produtos',(req, res)=>{
    return res.sendFile(__dirname + "/views/produtos.html");
});
// servidor.get('/quemSomos',(req, res)=>{
//     return res.sendFile(__dirname + "/views/quemSomos.html");
// });
servidor.get('/login',(req, res)=>{
    return res.sendFile(__dirname + "/views/login.html");
});
servidor.get('/listaProdutos',(req, res)=>{
    return res.sendFile(__dirname + "/views/listaProdutos.html");
});
servidor.get('/cadastro',(req, res)=>{
    return res.sendFile(__dirname + "/views/cadastro.html");
});
servidor.get('/painel-usuario',(req, res)=>{
    return res.sendFile(__dirname + "/views/painel-usuario.html");
});
servidor.get('/checkout-pagamento',(req, res)=>{
    return res.sendFile(__dirname + "/views/checkout-pagamento.html");
});
servidor.get('/finalizacao-compras',(req, res)=>{
    return res.sendFile(__dirname + "/views/finalizacao-compras.html");
});
// 4 - Por o servidor no modo "aguardando requisição"
servidor.listen(3000);