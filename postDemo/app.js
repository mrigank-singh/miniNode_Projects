var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

var fList = ["Mrigank", "Nilesh", "Sarvagya", "Bhanu"];

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.get("/friends", function(req,res){
   res.render("friends.ejs", {friends: fList});
});

app.post("/addFriends", function(req,res){
    var newFrnd = req.body.frndName;
    fList.push(newFrnd);
    res.redirect("/friends");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started...");
});