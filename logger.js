const EventEmitter = require ('events')
const fs = require('fs')
const path = require('path')

// estancia el new pues usaré una nueva clase
const emitter = new EventEmitter()

//emitter on activa la escucha y en el según parametro estancia la respuesta
//appendFile va a leer el archivo 
//path join buscará el archivo en cualquier directorio
//passando el messsage y la function de error 
emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
        if(err) throw err;
    })
})

//creamos la function log para exportar 
function log(message){
    emitter.emit('log', message)
}

module.exports = log;