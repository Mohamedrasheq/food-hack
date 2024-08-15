const {createReadStream}=require('fs');
const http=require('http');
const server=http.createServer((req,res)=>
{
    if(req.url==="/")
    {
     const stream=createReadStream('./content/big.txt','utf8');
     stream.on('open',()=>
     {
stream.pipe(res);
     });
}
});
server.listen(5000,()=>{
    console.log("Server listening on port 5000");
});
