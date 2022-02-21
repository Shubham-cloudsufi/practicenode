const http = require("http");

const server = http.createServer((req, res) => {
  // res.write('welcome to home page')
  // console.log('qelcome ')
  // res.end()
  if (req.url === "/") {
    res.end("welcome to home page");
  }
  if (req.url === "/about") {
    res.end("welcome to about page");
  }
  res.end(`
        <h1> Oops !</h1>
        <p> we cant seem to find the page we are looking for</p>
        <a href = "/">back home </a>
        `)
});

server.listen(3000);
