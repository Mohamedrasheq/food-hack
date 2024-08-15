const http=require('http');
const {readFileSync}=require('fs');
const homepage=readFileSync('./index.html');
const server=http.createServer((req,res)=>{
if(req.url==="/")
{
    res.writeHead(200,{"content-type":"text/html"});
    res.write(homepage);
    res.end();
}
else if(req.url==="/about")
{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>About page</h1>");
    res.end();
}
else{
    res.writeHead(404,{"content-type":"text/html"});
    res.write("<h1>Page Not found</h1>");
    res.end();
}
});
server.listen(5000,()=>
{
console.log("Server listening on port 5000");
});