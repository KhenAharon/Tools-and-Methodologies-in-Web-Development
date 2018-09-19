
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var calc = require("./calculate");

app.use(express.json()) 
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

module.exports = app;

app.post("/calculate", function(req, res) {
    //get the variables from the url query
    console.log("*******");
    
    let input = req.body.input;
    let calculatorState = req.body.calculatorState;

    let state = calc.calculateNextState(calculatorState,input);
    console.log(typeof (s));
    res.json(state);
});

app.listen(3000, function(){
    console.log("listening to port 3000")});

