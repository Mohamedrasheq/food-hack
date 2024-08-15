const {readFileSync}=require('fs');
const http=require('http');
const server=http.createServer((req,res)=>
{
    if(req.url==="/")
    {
     const file=readFileSync('./content/big.txt','utf8');
     res.end(file);
     
}
});
server.listen(5000,()=>{
    console.log("Server listening on port 5000");
});


