const{readFileSync , writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/resultSync.txt', `here is the result : ${first} , ${second}`)

// console.log(first)
// console.log(second);
