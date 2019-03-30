var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Hi There, welcome to my assignment!");
})

app.get("/speak/:animal", function(req,res){
    var animalName= req.params.animal;
    if(animalName == "pig")
        res.send("The "+animalName+" says 'Oink'");
    else if(animalName == "duck")
        res.send("The "+animalName+" says 'Quack'");
    else if(animalName == "dog")
        res.send("The "+animalName+" says 'Woof Woof'");
})

app.get("/repeat/:thisString/:times", function(req, res) {
    var toPrint="";
    for(var i=0;i<req.params.times;i++)
    {
        toPrint+=req.params.thisString+" ";
    }
    res.send(toPrint);
})

app.get("*", function(req, res) {
    res.send("Sorry, page not found....What are you doing with your life?");
})


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started...");
});