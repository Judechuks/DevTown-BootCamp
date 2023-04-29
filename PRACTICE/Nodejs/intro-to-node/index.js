const express = require("express");
const App = express();
const bodyParser = require("body-parser");
// App.listen(8000);
App.listen(8000, function() {
  console.log("The server started on port 8000");
});
/* App.get("/", function(req, res) {
  res.send("Hello World!");
}); */
App.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
App.get("/about", function(req, res) {
  res.send("welcome to DevTown!");
});
/* App.post("/", function(req, res) {
  res.send("Submitted Successfully!");
}); */
App.use(bodyParser.urlencoded({extended:true}));

App.post("/", function(req, res) {
  var num1 = Number(req.body.n1); 
  // form the bodyparser, gets the n1 value converts it to number type and assigns it to num1
  var num2 = Number(req.body.n2); 
  // form the bodyparser, gets the n2 value converts it to number type and assigns it to num2
  var result = num1 + num2;
  res.send("The result of your calculation is " + result);
});