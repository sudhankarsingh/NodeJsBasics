const http=require("http")

http.createServer(function(req,res){
    console.log(req.url)
    console.log(req.headers.origin)
      res.end("I am nodejs server")
}).listen(3001)