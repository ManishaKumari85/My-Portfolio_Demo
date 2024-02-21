const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const route = require("./Routes/route")
const path = require("path")

//rest object
const app = express()

//midlewares
app.use(cors())
app.use(express.json())

// static files access
app.use(express.static(path.join(__dirname, './client/build')));


// routes

app.use("/",route);


// static file get

app.get('*',function(req,res) {
  res.sendFile(path.join(__dirname,'./client/build/index.html'))  
});





//port
const port = process.env.PORT  || 8000


//listen
app.listen( port,()=>{
    console.log(`Server Running On PORT ${port}`)
})