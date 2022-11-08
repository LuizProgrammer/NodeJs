const http = require('http');
const url = require('url');
const fs = require('fs');


http.createServer( function (req, res) {

  let reqUrl = url.parse(req.url, true); //Url de requisição fracionada
  let queryUrl = reqUrl.query; //dados passados na Url

  res.writeHeader(200, {'Content-Type':'text/text'});

  // Criar arquivos
  // substitui ou cria arquivos
  fs.writeFile( "first.text", "primeiro texto", (err)=>{

    // abre arquivo novo ou existente
    fs.open( "first.text", "r", (err, file)=>{

      // Atualizar arquivos
      // adiciona conteudo em arquivo novo ou existente
      err ? err : fs.appendFile( "first.text", "Segundo texto", (err)=>{

        // Ler arquivos
        fs.readFile("first.text", function(err, dados) {
          res.write(dados);
          res.write("Esta dando certo, não para não.");

          res.end();
        });

      });

    });
    
  });


  // Deletar arquivos
  let trashFile = fs.unlink( "diretorio", (err)=>{

  });

  // Renomear arquivos
  let changeName = fs.rename( "atual", "novo", (err)=>{

  });


}).listen(8080);
