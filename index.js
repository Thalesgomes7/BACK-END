// Importa o módulo HTTP do Node.js (nativo)
const http = require('http');
// Cria o servidor
// O createServer recebe uma função que será executada toda vez em que alguém acessar o servidor
const servidor = http.createServer((req, res) => {
    // req -> Informações da Requisição(request)
    // res -> Resposta que vamos enviar ao "cliente" (response)
  res.end('Meu primeiro servidor Node!');
  // res.end envia uma mensansagem final para o navegador e finaliza a requisição

  //O req.url mostra qual caminho a pessoa digitou no navegador
  // res.end("Acessando: " + req.url);
  
});
// Fará o servidor "escutar" na porta 3000 (escolhida por nós)
servidor.listen(3000);

//portas comum:
// 80 -> HTTP padrão
// 445 -> HTTPS
// 3000 -> Desenvolvimento
// 5000 -> Comum para APIs
// 8080 -> Alternativa para web