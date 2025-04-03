import express from "express"
import bodyParser from "body-parser"
const router = express.Router()

const api = express()
const port = 3000

// Add headers before the routes are defined
api.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*")

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")

  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true)

  // Pass to next layer of middleware
  next()
})

api.use(bodyParser.json())

api.get("/kanban", (req, res) => {
  res.send(
    JSON.stringify([
      {
        name: "kk",
        tasks: []
      },
      {
        name: "dfgd",
        tasks: [
          {
            name: "dfssdfsdf"
          },
          {
            name: "sdfsdf"
          },
          {
            name: "sdfsd"
          }
        ]
      }
    ])
  )
})

api.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
