# Editor de Texto

Primeiro projeto com Electron, baseado na video aula de William Costa - `WDEV`. 

	https://www.youtube.com/watch?v=rBeEvzwI11c

Titulo:	
	
	Electron JS: Desenvolvendo uma aplicação desktop com HTML, CSS e JavaScript

O projeto é para criar um editor de texto usando apenas HTML, CSS e Electron JS.

Electron JS é um  Framework multiplataforma .

Documentação do electron

	https://www.electronjs.org/pt/docs/latest/


## Trabalhando 


Usando o Editor de preferencia assim como o terminal  iremos iniciar o 

* Iniciar o terminal

* rodar os comandos do node
 - `npm init -y`
 - inicia o projeto e cria o `package.json` com as informações principais do projeto
 - iniciar o node dentro da pasta WDEV/projeto01

* modificar o arquivo json
 - main ( arquivo principal da funcao) pode receber o arquivo com o nome que desejar , mas lembrando que tem de ser `.js`
 - script: 
  - test: será eliminado, no momento não será usado;
   -  "test": "echo \"Error: no test specified\" && exit 1"
  - start: comando para iniciar ;
   -  "start": "electron ."
* Instalar o electron
 - `npm install electron`
  - Instalado e criou a pasta node_modulos
* criar as pastas e arquivos do projeto
 - criar o arquivo `main.js` na raiz do projeto
  - responsável por gerenciar o arquivo principal do projeto - ele é o gerente;
  - importando a dependencia:
   - const {  app } = require('electron'); 
  - com a dependencia importado o sistema ja roda , use o comando  `npm start` entretanto agora ele nao tem o que mostrar ainda .
  



