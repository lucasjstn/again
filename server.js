const colors = require("colors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const app = require("./src/app")

mongoose.set("strictQuery", false)
dotenv.config({ path: "./config.env"})

mongoose.connect(process.env.DATABASE_CLOUD, { usenewurlparser: true})
.then(()=> {
    console.log(colors.yellow("database connected"))
})
.catch(error => {
    console.error(error)
  })

const PORT = process.env.PORT || 3001 
const server = app.listen(PORT, ()=>{
  console.log(colors.yellow(`server is running, port ${PORT} as ${process.env.NODE_ENV}`))
})
