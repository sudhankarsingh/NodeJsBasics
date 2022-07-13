const express=require('express')

const app = express()

app.get("/",function(req,res){
    res.send("hello there")
})

app.listen(3000,function(){
    console.log("server is up and running at 3000")
})