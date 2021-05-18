const express = require('express');
const mongoose = require('mongoose');
const table = require('./table')

 
const app = express();


app.use(express.static(__dirname+"/frontend"));

var password = process.env.Mongo_password;
var connectionString = 'mongodb+srv://sreehari2341:'+password+'@cluster0.ahabi.mongodb.net/crud?retryWrites=true&w=majority'


mongoose.connect(connectionString, {});
mongoose.connection.on('connected', function () {
    console.log("Database Connected");
});

 
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

   app.get("/", function(req, res){
    res.sendFile('frontend/html/crud-operations.html', {root:__dirname});
})



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