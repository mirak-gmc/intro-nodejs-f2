const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("<h1>Hello World </h1> ");
      break;
    case "/profile":
      res.end("<h1>Hello Profile </h1>");
      break;
    default:
      res.end("<h1>Oups error :'( </h1>");
  }
});

server.listen(5000, () => {
  console.log("The Server is Running on port 5000");
});
