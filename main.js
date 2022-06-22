
const { app, BrowserWindow, Menu , dialog, ipcMain, shell } = require('electron'); 

const fs = require('fs'); //file sistem === sistema de arquivos 

const path =require('path');
// para descobrir o nome do arquivo salvo 


//const { writeFile } = require('original-fs');
//dependencia para quque o projeto principal funcione 


// processo reinderizador 


//fazer a comunicação entre os projetos 

var mainWindow = null ;

//janela principal
async function createWindow(){
    //console.log('janela principal');

    //para a  janela que sera aberta
    mainWindow = new BrowserWindow({
        // definir propriedades da janela
        width: 800, 
        height: 600,

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
        

    });
     //para liberar a integração com o node 

    //chamando o arquvio HTML 
    await mainWindow.loadFile('src/pages/editor/index.html');

    // ativar dev-tools
    // mainWindow.webContents.openDevTools();
    // DEIXAR  comentado enquanto nao for preciso

    // para quando cria a nova janela já começar renomeada 
    createNewFile();


    // para receber as informações do renderizador
    ipcMain.on('update-content',  function(event ,  data ){
        // console.log(data); 
        //mostra no console as informações que foram escritas no textarea

        file.content = data ;
        //enquaminhando para o conteudo do file
    });
}


//definição da funcao que ira salvar o arquivo
function writeFile( filePath ){
    try{
        fs.writeFile(filePath, file.content, function( error ){
            // se deu algo de errado
            if( error ) throw error ;
            
            //se salvou o arquivo corretamente guarda as novas informações 
            file.path = filePath; // caminho onde foi salvo 
            file.saved = true; // foi salvo
            file.name = path.basename(filePath); // nome do arquivo salvo pelo usuário
            //console.log(file );// mostra as informações do arquivo ( name, content, saved e path )

            mainWindow.webContents.send('set-file', file);


        });
    }catch( e ){
        console.log(e);
        //apresenta o erro
    }
}




// arquivo aberto
var  file = {}


//para criar um novo arquivo do Editor ( Arquivo => Novo)
function createNewFile(){
    file = {
        name: 'novo-arquivo.txt',
        content: '',
        saved: false, 
            // ('D:/documentos/Praticando/electron/arquivosCriados'
        path: app.getPath('documents') + '/novo-arquivo.txt'
    };
    // aparecerá quando clicar em arquivo -> novo 
    //console.log( file );
    mainWindow.webContents.send('set-file', file);
}


// ler arquivo
function readFile( filePath){
    try{
        return fs.readFileSync( filePath, 'utf8' );
    }catch(e){
        console.log(e);
        return '';
    }
}

//ABRIR ARQUIVO
async function openFile(){

    //qual arquivo que deve ser aberto
    let dialogFile = await dialog.showOpenDialog({
        defaultPath: file.path
    });

    //verificar cancelametno 
    if( dialogFile.canceled){
        return false;
    }

    //abrir o arquivo
    file = {
        name: path.basename( dialogFile.filePaths[0]), 
        content: readFile(dialogFile.filePaths[0]),
        saved: true,
        path: dialogFile.filePaths[0]
    }

    //console.log( file );
    //trouxe as informações do arquivo 

    //agora colocar as informações do arquivo na textarea
    mainWindow.webContents.send('set-file', file );
   

}




// para salvar o arquvivo
async function saveFileAs(){
    let dialogFile = await dialog.showSaveDialog({
        defaultPath: file.path
        //carrega o utlimo caminho escolhido 
    });

    //verificar o cancelamento de salvar como
    if( dialogFile.canceled){
        return false;
    }

    // quando realmente quer salvar


    //para salvar arquivo
    writeFile( dialogFile.filePath);
    




    //console.log(dialogFile);

}


//SALVAR
function saveFile(){

    //se o arquivo ja tiver sido salvo
    if( file.saved){

        //apenas sobreescrever  o arquivo
        return writeFile(file.path);
    }

    //se não tiver sido salvo 
    return saveFileAs();
    
}


//template menu
const templateMenu = [
    { 
        label: 'Arquivo',
        submenu: [
            { label: 'Novo',
                //atalho
                accelerator: 'CmdOrCtrl+N',
                // Cmd para Mac
                // Ctrl para windows 
                click(){
                    createNewFile();
                }
            },
            { label: 'Abrir',
                accelerator: 'CmdOrCtrl+O',
                click(){
                    openFile();
                }
            },
            { label: 'Salvar',
                accelerator: 'CmdOrCtrl+S',
                click(){
                    saveFile();
                }
            },
            { label: 'Salvar Como', 
                accelerator: 'CmdOrCtrl+Shift+S',
                click(){
                    saveFileAs();
                }
            },
            { label: 'Imprimir'},
            { label: 'Sair' , role: 'quit'}, 
            { label: 'Fechar', role:process.platform === 'darwin' ? 'close' : 'quit' },

            //validadno para usar no Mac por isto deixei ambas 
            

        ]
    },
    {
        label: 'Editar',
        submenu:[
            { label: 'Desfazer',   role: 'undo' },
            { label:'Refazer', role: 'redo'},
            { type: 'separator'},// separador
            { label: 'Copiar', role: 'copy'},
            { label: 'Colar', role: 'paste'},
            { label: 'Recortar', role: 'cut'}
        ]

                

    }, 
    {
        label: 'Ajuda',
        submenu:[
            {
                label: 'Canal WDEV',
                click(){
                    shell.openExternal('https://youtube.com/wdevoficial');
                }
            }
        ]
    }
];


//menu
const menu = Menu.buildFromTemplate( templateMenu);


//adicionar o menu na aplicação
Menu.setApplicationMenu( menu );



// quando estiver pronto ... faça
app.whenReady().then( createWindow);
//createwindow para criar a janela 


//para quando é mac 
//ACTIVATE
app.on('activate' , ()=>{

    if (BrowserWindow.getAllWindows().lenght === 0 ){
        createWindow();
    }
    
});

