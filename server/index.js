

const express = require("express"); 
const cors = require("cors"); 
const bodyParser = require("body-parser") //lets express know what is in the html
const path = require("path"); 

const app = express(); 
const PORT = 8080;  //port we are on
const jsonParser = bodyParser.json;

app.use(cors()); 
//theres another folder express needs to read: 
app.use(express.static("client"));   //tell express the client folder exists
// now need to create relative path of the folder 
express.static(path.join(__dirname,"/client")) //relative path

app.get('/', (req, res)=>{
    // res.json('Hello this will be a single page');// testing should give us this text on the browser when we do localhost:8080
    res.sendFile(path.join(__dirname, "../client/index.html"))
} )


//router for about me
app.get('/aboutme', (req, res)=>{ //then need to create html
    // res.json('Hello this will be a single page');// testing should give us this text on the browser when we do localhost:8080
    res.sendFile(path.join(__dirname, "../client/about.html")) //making sure the path is about me
} )

//router for about me
app.get('/contactme', (req, res)=>{ //then need to create html
    // res.json('Hello this will be a single page');// testing should give us this text on the browser when we do localhost:8080
    res.sendFile(path.join(__dirname, "../client/contactme.html")) //making sure the path is about me
} )


//anything that user calls thats not a valid path: 
//must be last router of app kind of like a switch or an else
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname, "../client/404.html"))
})
//simple post req

// app.post("/", (req,res) => {
//     res.send(req.body)
// }) 
app.listen(PORT, console.log(`Jambo, this is my server in port ${PORT}`)); //testing to see if port we are on is working

