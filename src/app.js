const express = require("express")

//routes
const testRouter = require("./routes/testRoutes")
const app = express()
const postRouter = require("./routes/postRoutes")

app.use("/api/v1", testRouter)
app.use("/api/v1/post", postRouter)

app.all("*", ()=>{
  res.status(404).json({
    status: "fail",
    message: "Cant find route"
  })
})

module.exports = app
