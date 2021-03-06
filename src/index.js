const express = require("express");
var bodyParser = require("body-parser");
const mongoose  = require("mongoose");
const multer=require("multer")
const route = require("./route/route.js");
const app = express();

app.use(bodyParser.json()); // tells the system that you want json to be used
app.use(multer().any())
app.use(bodyParser.urlencoded({ extended: true })); // It is a inbuilt method in express to recognize the incoming Request Object as strings or arrays

// mongoDb connection
mongoose.connect(    
    "mongodb+srv://hyderali1921:nkkytnwlsFVYce0x@cluster0.apaia.mongodb.net/hyderali1921",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.log(err));

// Initial route
app.use("/", route);

// port
app.listen(process.env.PORT || 3001, function () {
  console.log("Express app running on port " + (process.env.PORT || 3001));
});

