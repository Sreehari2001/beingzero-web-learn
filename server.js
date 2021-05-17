const express = require('express');
 
const app = express();

var a = [
    {data : 'one'},
    {data : 'two'}
];

app.use(express.static(__dirname+"/frontend"));


 
app.get("/", function(req, res){
    res.send("Welcome to My Basic Site");
})


app.get("/resume", function(req, res){
    res.sendFile('frontend/html/resume.html', {root:__dirname});
})

app.get("/google", function(req, res){
    res.sendFile('frontend/html/google.html', {root:__dirname});
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
 
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})


app.use(express.urlencoded({extended: true}));
app.use(express.json());

var a={
    "task":[]
   };

app.get('/api/todo', function(req, res){
    res.json(a);
})

app.post('/api/todo', function(req, res){
    var newUser= req.body;
    // console.log(newUser.task)
    a.task.push(newUser.task)
    // console.log(a)
    res.json(a)
 })

 app.delete('/api/todo/:id', function(req, res){
    var i=req.params.id
    if(i==-1){
        for(var j=0;j<a.task.length;++j){
            a.task.splice(j,1)
            console.log(a.task[j])
        }
    }
    a.task.splice(i,1)
})

app.put('/api/todo/:id', function(req, res){
    var i=req.params.id
    a.task[i]="<s>"+a.task[i]+"</s>" 
})