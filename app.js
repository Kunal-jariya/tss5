const express = require("express")
const app = express()
const cors = require("cors")
const AllRoutes = require("./config/AllRoutes")

// for Live Server 7,8,9
const root = require("path").join(__dirname, "build")
app.use(express.static(__dirname+"/assets"))
app.use(express.static(root))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(AllRoutes)

app.get("*", async(req, res)=>{
    res.sendFile("index.html", {root})
})

const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log("Server Is Running")
})