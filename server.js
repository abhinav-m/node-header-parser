const http = require("http");

const port = process.env.port || 3000;
const server = http.createServer((req, res) => {
  const os = req.headers.host;
  const ip = req.socket.localAddress;
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

server.listen(3000, () => {
  console.log(`Server is listening at ${port}`);
});
