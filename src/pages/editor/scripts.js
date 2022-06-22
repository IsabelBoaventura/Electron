const { ipcRenderer } = require('electron');

//ELEMENTOS 
const textarea = document.getElementById('texto');
const title = document.getElementById('title');

// set.file que vem la do main
ipcRenderer.on('set-file', function (event, data){
    // console.log(data);
    //renomeando os elementos do novo arquivo 
    textarea.value = data.content;
    title.innerHTML = data.name+ ' | PROJETO 01 ';
});


//UPDATE TEXTAREA
// função para gerenciar o conteudo da textarea
function handleChangeText(){
    //enviar
    ipcRenderer.send('update-content', textarea.value);
    //vai encaminhar para o main

}