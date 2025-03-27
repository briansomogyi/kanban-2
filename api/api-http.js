import http from "http"

const hostname = "0.0.0.0"
const port = 3000

const server = http.createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*"
  }

  console.log("Headers ", req.rawHeaders)
  //   res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")
  res.writeHead(200, headers)
  res.end("Hello World TEST")
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
