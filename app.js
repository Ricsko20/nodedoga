import express, { json } from 'express'
import { fileURLToPath } from 'url'
import path from 'path'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)))

const app = express()
app.use(express.json())


app.get("/", (req, res, next) => {
    res.sendFile('/nodedoga/nodedoga/public/index.html')
})

const users = [
    { id: "1",  name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Sam Johnson" },
  ];

app.get("/express", (req, res, next) => {
    res.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.")
})

app.get("/express", (req, res, next) => {
    res.send("Hello, Kovács Richárd")
})

app.get("/express", (req, res, next) => {
    res.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")
})

app.listen(3000, () => {console.log("Hi there!")})