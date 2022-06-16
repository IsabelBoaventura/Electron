# Editor de Texto

Primeiro projeto com Electron, Editor de texto, baseado na video aula de William Costa - `WDEV`. 

	https://www.youtube.com/watch?v=rBeEvzwI11c

Titulo:	
	
	Electron JS: Desenvolvendo uma aplicação desktop com HTML, CSS e JavaScript

Electron Framework multiplataforma 

Documentação do electron

	https://www.electronjs.org/pt/docs/latest/


## Trabalhando 

Criando o projeto.

* Iniciando os comandos do node:
	- `npm init -y`
		- cria o arquivo `package.json`, neste arquivo  há as instruções principais do projeto;
* Modificando o arquivo package.json
	- eliminado o script `test`
	- criando o `start`
	- renomeando o  `main`
* Instalar o electron
	- `npm install electron`
* Criando o projeto principal
	- `main.js ` que estará dentro do pasta raiz
* Criar a dependencia dentro do arquivo main
	- const { app } = require('electron'); 
* Rodar para testar se o projeto esta funcionando sem erros 
	- `npm start`
* Configurar a aplicação ( trabalhando dentro do main)
	- criando a janela principal `createWindow`, executando para verificar `npm start`;
* Configurando a janela principal usando `async`para que o projeto só execute uma parte depois que receber a resposta da outra parte;
* Importar dependencia para a janela `browserWindow`;
* Com as configurações básicas da janela criada, testar `npm start`;
	- Primeira tela: 
	
		<img src="imagens/teste01.jpg">
	- Criada a janela básica do próprio electron
* Criando uma pagina para receber o HTML 
* Criar na raiz do projeto a pasta `src` dentro dela a pasta `pages`, e dentro da pasta pages , criar a pasta `editor` que será a pasta dos arquivos deste editor que estamos criando agora. Dentro da pasta editor criar o arquivo `index.html`.
* Criar a estrutura do HTML e `Ola Mundo`para o primeiro teste;
* Dentro do main fazer ele buscar o arquivo HTML criado em separado;
	- Teste da inclusão HTML bem sucedido.

	<img src="imagens/testeComHTML.jpg">

* Adicionar o textarea para a página HTML;
* Criar e adicionar o arquivo de estilo deste HTML;
* Teste com o arquivo abrindo  e criando um Text area

	<img src="imagens/textArea.jpg">

* Configurações de estilo da TextAarea ( lembre -se de fechar a aplicação para fazer as mudanças );
* Voltando para o main.js. 
* Menu da janela sendo aberta `Menu`;
* Criando o menu `Arquivo`com seus atributos;

	<img src="imagens/menuArquivo.jpg">

* Definindo as ações de cada atributo do Menu, na aplicação dele o 'Fechar' ficou mostrando um atalho, em minha versão não apareceu o atalho.
* Receber a mensagem de que é um novo arquivo no index.html;
* Criar o arquivo `script.js`, no mesmo caminho do arquivo index.html e estilo.css ;
* O arquivo `script.js`será o responsável pela renderização do projeto;
* O que acontece dentro do main conseguimos ver no terminal,  mas o que acontece dentro do renderizador,  só conseguimos ver dentro dos `DEV-TOOLS` , ferramentas de desenvolvimento dos navegadores;
* Para ativar os dev-tools iremos fazer no main depois do carregamento da pagina HTML; 









