const os = require('os')

//infor  about current user
const user =os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`the system uptime in seconds : ${os.uptime()} seconds`);

// for system
const currentOS = {
    name: os.type(),
    release :os.release(),
    freeMem: os.freemem(),
    totalMem:os.totalmem()
}
console.log(currentOS)