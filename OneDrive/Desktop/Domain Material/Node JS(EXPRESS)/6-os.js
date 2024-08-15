const os = require('os');
const object1={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(object1);