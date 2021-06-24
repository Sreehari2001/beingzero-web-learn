const express = require('express');
const mongoose = require('mongoose');
const table = require('./table')
const config = require('./config')
const connect = require('./dbConnectlib')

 
const app = express();

app.use('/css', express.static('css'));
app.use(express.static(__dirname+"/frontend"));
app.set('view engine', 'ejs');


connect.connect();
 
app.get("/", function(req, res){
    res.send("Welcome to My Basic Site");
})


app.get("/resume", function(req, res){
    res.sendFile('frontend/html/resume.html', {root:__dirname});
})

app.get("/support", function(req, res){
    res.sendFile('frontend/html/support.html', {root:__dirname});
})

app.get("/logs", function(req, res){
    res.sendFile('frontend/html/log.html', {root:__dirname});
})

app.get("/google", function(req, res){
    res.sendFile('frontend/html/google.html', {root:__dirname});
})

app.get("/log", function(req, res){
    res.render('log');
})

app.get("/todo-crud", function(req, res){
    res.sendFile('frontend/html/todocrud.html', {root:__dirname});
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

app.get("/todocrud", function(req, res){
    res.sendFile('frontend/html/todocrud.html', {root:__dirname});
})

app.get("/crud", function(req, res){
    res.sendFile('frontend/html/crud-operations.html', {root:__dirname});
})

app.get("/tambola", function(req, res){
    res.sendFile('frontend/html/tambola.html', {root:__dirname});
})

app.get("/register", function(req, res){
    res.sendFile('frontend/html/register.html', {root:__dirname});
})

app.get("/login", function(req, res){
    res.sendFile('frontend/html/login.html', {root:__dirname});
})
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(config.webPort, function(){
    console.log("Server Starting running on http://localhost:"+config.webPort);
})


app.use(express.urlencoded({extended: true}));
app.use(express.json());

var a={
    "task":[]
   };

app.get('/api/todo', function(req, res){
    todo.find()
    .then((result) =>{
        res.send(result);
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
})

app.post('/api/todo', function(req, res){
    var newUser= req.body;
    const newTask = new todo({
        name : newUser.task,
    })
    newTask.save();
 })

 app.delete('/api/todo/:id', function(req, res){
    var i=req.params.id
    todo.findByIdAndDelete
})

app.put('/api/todo/:id', function(req, res){
    var i=req.params.id
    a.task[i]="<s>"+a.task[i]+"</s>" 
})


// table

app.get('/crud/get', function(req, res){
    table.find()
    .then((result) =>{
        res.send(result);
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    })
})

app.post('/crud/post', function(req, res){
    var newUser= req.body;
    const newTable = new table({
        name : newUser.name,
        Articels : newUser.Articels
    })
    console.log(newTable);
    newTable.save();
 })

 app.post('/register', (req, res) => {
     var newUser = req.body;

 })

 app.delete('/crud/del/:id', function(req, res){
    var i=req.params.id
    table.findByIdAndDelete(i, (err)=>{
        if(err){
            console.log('Error:'+err);
        }
        else{
            console.log('Success');
        }
    })
})

app.put('/crud/put/:id', function(req, res){
    var i=req.params.id
    table.findById(i, function (err,Obj) {
        if(err){
            console.log('Error:' + err);
        }
        else{
            table.findByIdAndUpdate(i, {Articels: value}, function(){})
        };
    });

    
})