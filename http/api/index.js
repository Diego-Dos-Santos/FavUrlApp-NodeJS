const http = require('http')
const fs = require('fs')
const URL = require('url')
const path = require('path')

const data = require('./urls.json')



function writeFile(cb){
    return fs.writeFile(
        path.join(__dirname, 'urls.json'),
        JSON.stringify(data),
        err => {
            if (err) throw err

            cb(JSON.stringify({ message: 'done'}))
        }
    )
}

http.createServer((req, res) => {
    const { name, url, del} = URL.parse(req.url, true).query

    //dar permiso a todos entrarem en mi app ( independiente de la puerta )
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })

    //all resources (todos los recursos)
    if(!name || !url)
        return res.end(JSON.stringify(data))
    
    if(del){
        data.urls = data.urls.filter(item => String(item, url) !== String(url))
        return writeFile((message) => res.end(message))
    }

    data.urls.push({ name, url })

    return writeFile((message) => res.end(message))

}).listen(3005, () => console.log('api is running'))