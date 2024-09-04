const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const Product = require("./model/productModel")
const productRouter = require("./routes/productRouter")
const userRouter = require("./routes/userRouter")
const tokenControl= require("./middleware/auth")


require("dotenv").config()


  
const app = express()
app.use(express.json())



app.use(cors({
    origin: "*"
  }))

  mongoose.connect("mongodb+srv://edakarakisla:206080Eo@cluster0.sv1ooj1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log(err))


  app.get("/", (req,res) =>{
    res.send("Merhaba Express.js")
})



app.use("/product", productRouter)
app.use("/user", userRouter)

app.listen(9000)