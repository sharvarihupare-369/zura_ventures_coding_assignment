const express = require("express");
const { connection } = require("./db");
const { projectRouter } = require("./routes/projectsroute");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/project",projectRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to home route");
})

app.listen(process.env.PORT || 5000 , async()=>{

    try {
        await connection;
        console.log("Connected to Database...")
    } catch (error) {
        console.log(error);
    }

    console.log(`Server is listening on port ${process.env.PORT}`)

})
