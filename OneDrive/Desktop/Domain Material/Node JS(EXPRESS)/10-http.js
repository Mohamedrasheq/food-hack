const http=require('http');
const server=http.createServer((req,res)=>
{
if(req.url==="/")
{
    res.end("Hello This is Home Page");
}
else if(req.url==="/about")
{
    res.end("This is about page");
}
else{
res.end(`
<h1>Oops !....</h1>
<p>Page Not found error....</p>
<a href="/">Back to home page</a>`);
}});
server.listen(5000);