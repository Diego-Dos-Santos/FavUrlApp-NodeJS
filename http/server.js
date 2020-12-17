const http = require ('http')
const fs = require('fs')
const path = require('path')

http.createServer((req,res) => {

    const fileRead = req.url === '/' ? 'index.html':req.url
    console.log(fileRead)    
    const filePath = path.join(__dirname, 'public', fileRead)
    const extname = path.extname(filePath)

    const allowedFileTypes = ['.html', '.css', '.js']
    const allowed = allowedFileTypes.find(item => item == extname)

    if (!allowed) return

       fs.readFile (
           filePath,
            (err,content) => {
                if (err) throw err

                res.end(content)
            }
       )
}).listen(5000, () => {
    console.log('running....')
})