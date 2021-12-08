const fs = require('fs')
const http = require('http')
const url = require('url')
const server = http.createServer((req,res)=>{
    const reqpath = req.url
    if(reqpath ==='/data'){
        res.end('you can access data now')
    }
    else if(reqpath === '/api'){
      const fun =  fs.readFileSync('./data.json','utf-8')
        res.end(`${fun}`)
    }
   else if(reqpath===reqpath){
       res.end('welcome...!')
   }
   else{
    res.writeHead(404,{
        'contenttype':'text/html'
    })
 res.end("<h1>404 error<\h1>")
}
})
server.listen(8000,'127.0.0.1',() => {
    console.log('listening on port 5000')
})