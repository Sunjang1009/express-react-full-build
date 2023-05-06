//dependencies
require("dotenv").config();
const { PORT } = process.env

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const peopleRouter = require('./controllers/people');

//middleware
app.use(cors());
app.use(morgan());
app.use(express.json());
//parse : 
app.use('/people', peopleRouter);




//routes

app.get('/', (req,res)=>{
    res.send("Hello World")
});




app.listen(PORT, ()=> console.log(`listening on PORT ${PORT}`));
