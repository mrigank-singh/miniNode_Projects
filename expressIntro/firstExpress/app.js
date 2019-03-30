var express = require("express");
var app = express();

app.get("/", function(request , response) {
    // body...
    response.send("Hi there!");
})

app.get("/bye", function(request , response) {
    // body...
    response.send("Goodbye!");
})

app.get("/dogs", function(request , response) {
    // body...
    response.send("Dogs are cute!")
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started...");
});