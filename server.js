const http = require("http");

const useragent = require("useragent");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const os = useragent.parse(req.headers["user-agent"]).os.toString();

  //https://stackoverflow.com/questions/8107856/how-to-determine-a-users-ip-address-in-node
  const ip = req.headers["x-forwarded-for"]
    ? req.headers["x-forwarded-for"].split(",").pop()
    : undefined ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;

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
