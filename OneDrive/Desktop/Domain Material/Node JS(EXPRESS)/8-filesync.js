const {readFileSync,writeFileSync}=require('fs');
console.log("start the File")
const first =readFileSync('./content/first.txt','utf8');
console.log(first);
const second =readFileSync('./content/second.txt','utf8');
console.log(second);
const result=writeFileSync('./content/third.txt',"Hi This is the third File",{flag:'a'});
console.log("Done with the Task");
console.log("Start the new Task");

