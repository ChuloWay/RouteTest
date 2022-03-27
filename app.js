const express = require('express');
const app = express();
const path = require('path')
app.listen(8080,(req,res)=>{
    console.log('Server Started On Port 8080!');
})

app.get('/',(req,res)=>{
    res.send('Okoye Victor Chukwuebuka')
})

app.get('/page',(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'))
    
})