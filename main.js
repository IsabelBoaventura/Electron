
const { app, BrowserWindow, Menu } = require('electron'); 
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
        height: 600

    });

    //chamando o arquvio HTML 
    await mainWindow.loadFile('src/pages/editor/index.html');
}

// arquivo aberto
var  file = {}


//para criar um novo arquivo do Editor ( Arquivo => Novo)
function createNewFile(){
    file = {
        name: 'novo-arquivo.txt',
        content: '',
        saved: false, 
        path: app.getPath('documents') + '/novo-arquivo.txt'
    };
    // aparecerá quando clicar em arquivo -> novo 
    console.log( file );
    mainWindow.webContents.send('set-file', file);
}

//template menu
const templateMenu = [
    { 
        label: 'Arquivo',
        submenu: [
            { label: 'Novo', click(){
                createNewFile();
            } },
            { label: 'Abrir'},
            { label: 'Salvar'},
            { label: 'Salvar Como'},
            { label: 'Imprimir'},
            { label: 'Sair' , role: 'quit'}, 
            {label: 'Fechar', role:process.platform === 'darwin' ? 'close' : 'quit' }
            //validadno para usar no Mac por isto deixei ambas 

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

