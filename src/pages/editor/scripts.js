const { ipcRenderer } = require( 'electron');

// set.file que vem la do main
ipcRenderer.on('set-file', function (event, data){
    console.log(data)
});