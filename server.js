const express = require('express');
 
const app = express();

app.use(express.static(__dirname+"/frontend"))
 
app.get("/", function(req, res){
    res.send("Welcome to My Basic Site");
})

app.get("/resume", function(req, res){
    res.sendFile('frontend/html/resume.html', {root:__dirname});
})

app.get("/google", function(req, res){
    res.sendFile('frontend/html/google.html', {root:__dirname});
})

app.get("/apple", function(req, res){
    res.sendFile('frontend/html/apple.html', {root:__dirname});
})
app.get("/color-picker", function(req, res){
    res.sendFile('frontend/html/color-picker.html', {root:__dirname});
})

app.get("/cf-api", function(req, res){
    res.sendFile('frontend/html/cfvisualizer.html', {root:__dirname});
})

app.get("/todo", function(req, res){
    res.sendFile('frontend/html/todo.html', {root:__dirname});
})
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
