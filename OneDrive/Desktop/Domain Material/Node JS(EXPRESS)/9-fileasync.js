const {readFile,writeFile}=require('fs');
//const a=readFile('./content/first.txt','utf8');
//console.log(a); It not works
console.log("Start the file");
readFile('./content/first.txt','utf8',(error,result)=>
{
    if(error)
    {
        console.log(error);
        return;
    }
    else
    {
        console.log(result);
    }
    writeFile('./content/third.txt',"hey buddy",(error,result)=>
    {
        if(error)
        {
            console.log(error);
        }
        else
        {
            console.log("Done with the task");
        }

    });

});
console.log("Start the new Task");