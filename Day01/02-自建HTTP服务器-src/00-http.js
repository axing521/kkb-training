const fs = require("fs");
const http = require("http");

http.createServer((request, response) => {
    
    const { url, method, headers } = request;
    if (url === "/" && method === "GET") {
      fs.readFile(
        "index.html",
        (err, data) => {
          if (err) {
            response.writeHead(500, {
              "Content-Type": "text/plain;charset=utf-8",
            });
            response.end("500 服务器错误");
            return;
          }
          response.statusCode = 200;
          response.setHeader("Content-Type", "text/html");
          response.end(data);
        }
      );
    } else if (url === "/users" && method === "GET") {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ name: "axing521" }));
    } else if (method === "GET" && headers.accept.indexOf("image/*") !== -1) {
      
        
      fs.createReadStream();
    } else {
      response.statusCode = 400;
      response.setHeader("Content-Type", "text/plain;charset=utf-8");
      response.end("404 没这东西");
    }
  })
  .listen(3000, () => {
    console.log("Server at 3000");
  });

function getPrototypeChain(obj) {
  const protoChain = [];
  while ((obj = Object.getPrototypeOf(obj))) {
    protoChain.push(obj);
  }
  return protoChain;
}