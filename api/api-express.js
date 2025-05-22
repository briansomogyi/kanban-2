import express from "express"
import bodyParser from "body-parser"
const router = express.Router()

const api = express()
const port = 3000

import { List, Task } from "./db.js"

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

api.get("/get-started", (req, res) => {
  res.send(JSON.stringify({ message: "Salut!" }))
})

const lists = []
api.get("/kanban", async (req, res) => {
  const dbLists = await List.findAll({
    attributes: ["id", "name"],
    include: [
      {
        model: Task,
        attributes: ["id", "name", "color"]
      }
    ]
  })

  const lists = []
  dbLists.forEach(list => {
    const tasks = []
    list.dataValues?.Tasks.forEach(task => {
      tasks.push(task.dataValues)
    })

    lists.push({
      id: list.dataValues.id,
      name: list.dataValues.name,
      tasks: tasks
    })
  })

  console.log(lists)
  res.send(JSON.stringify(lists))
  // res.send(JSON.stringify(lists))
})

api.post("/kanban/add-new-list", (req, res) => {
  const { name } = req.body
  List.create({ name: name })
  // lists.push({ name: name, tasks: [] })
})

api.post("/kanban/add-new-task", (req, res) => {
  const { columnId, name } = req.body
  Task.create({ name: name, ListId: columnId })
  //lists[columnId].tasks.push({ name })
})

api.delete("/kanban/delete-list", (req, res) => {
  // console.log("DELETE")
  const { id } = req.body
  List.destroy({
    where: {
      id: id
    }
  })
  // lists.splice(id, 1)
})

api.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
