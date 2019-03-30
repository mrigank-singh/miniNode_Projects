var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
})

app.get("/:name",function(req, res){
    var n= req.params.name;
    res.render("name.ejs", {thisName:n});
})




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started...");
});