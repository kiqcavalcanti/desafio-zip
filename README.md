## Desafio 

Criar uma rota para zipar uma pasta e todo seu conteudo
 - utilizar o adm-zip
 - não pode utilizar os metodos de addLocalFolder apenas o addLocalFile
 - toda pasta e arquivo dentro da pasta public tem um id correspondente no banco de dados
 - a rota deve ser um post e deve ser passada folderIds como array no corpo da requisição
 - a rota deve retornar um arquivo zip
 - esse arquivo zip tem que ter dentro dele todo o conteudo da pasta que esta sendo feito o download
 - foi feito um exemplo de uma rota para baixar arquivos, pode se basear nisso


## Como Rodar o projeto 
  ./start-docker.sh ou /start-docker-v1.sh
