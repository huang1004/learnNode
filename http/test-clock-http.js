const http = require("http");

const fs = require("fs");

const path = require("path");

const server = http.createServer((req, res) => {
  let url = req.url;
  const filePath = path.join(__dirname, url);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.end("404 Not Found");
    } else {
      res.end(data);
    }
  });
});

server.listen(80, () => {
  console.log("Server running on port http:127.0.0.1");
});
