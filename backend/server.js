import express from "express"
import {data} from "./api/data.js"
const app = express()
const port = 3000




app.get('/api/data', (req, res) => {
  res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})