// Importo apenas o createServer do módulo HTTP do node
const { createServer} = require('node:http');

//Define o endereço do servidor (localhost)
const hostname = '127.0.0.1';

//Define a porta onde o servidor vai rodar.
const port = 3000;

//Cria nosso servidor
//Essa função será executada toda vez em que alguém acessar o servidor
const server = createServer((re, res) => {
  // Define o status da resposta (200 = OK/sucesso)
  res.statusCode = 200;

  // Define o tipo de conteúdo da resposta
  // Aqui estamos nos referindo a um texto simples(text/plain)
  res.setHeader('Content-Type', 'text/plain');
  
  // Envia a resposta ao "cliente/usuário" e finaliza a requisição
  res.end("Hello, Node!");
});

// Faz o servidor escutar na porta e endereço que definimos anteriormente.
// Assim que o servidor for executadoo, ele executará essa função.
server.listen(port, hostname, () => {

    // Mostra no terminal que o servidor está rodando e o link.
    console.log(`Server running at http://${hostname}:${port}/`);
});