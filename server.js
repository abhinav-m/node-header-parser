const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const os = req.headers.hostname;
  const ip = res.socket.remoteAddress;
  const lang = req.headers["accept-language"].split(",")[0];
  const stringRes = JSON.stringify({
    os,
    ip,
    lang
  });
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "X-Requested-With,content-type"
  });
  res.end(stringRes, "utf-8");
});

server.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
