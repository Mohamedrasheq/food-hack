const express = require("express");
const path=require("path");
const app=express()
// app.use is an middleware
app.use(express.static('./public'));
app.get('/',(req,res)=>
{
res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
});
app.get('/about',(req,res)=>
{
res.status(200).send("<h1>About Page</h1>");
});
app.get('*',(req,res)=>
{
res.status(404).send("<h1>Page not Found</h1>");
});
app.listen(5000,()=>{
    console.log("server running at port 5000");
})