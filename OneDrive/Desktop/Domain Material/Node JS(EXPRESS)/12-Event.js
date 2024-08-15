const Event=require('events');
const Emmiter= new Event();
Emmiter.on('response',(name,age)=>{
    console.log("Hello Event Emmited",`${name} ${age}`);
})
Emmiter.emit('response',"Rasheq",21);