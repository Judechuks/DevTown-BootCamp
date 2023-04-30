const express = require("express");
const App = express();
const bodyParser = require("body-parser");

App.listen(8000, function() {
  console.log("The server started on port 8000");
});

App.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// App.get("/about", function(req, res) {
//   res.send("welcome to DevTown!");
// });

App.use(bodyParser.urlencoded({ extended: true }));
const login_message = document.getElementById("login_msg");
const register_message = document.getElementById("msg");

//For login
App.post("/", function(req, res) {
  let login_username = req.body.login_user;
  // from the bodyparser, get the username of the user
  let login_password = req.body.login_pass;
  // from the bodyparser, get the password of the user

  if (login_password == login_username) {
    res.sendFile(__dirname + "/logged-in.html");
  }
  else {
    // res.send("Incorrect Username or Password");
    login_message.textContent = "Incorrect Username or Password";
  }
});

// For Register

App.post("/form2", function(req, res) {
  let password1 = req.body.password1;
  // from the bodyparser, get the username of the user
  let password2 = req.body.password2;
  // from the bodyparser, get the password of the user
  let agree_check = req.body.agree_check;
  // from the bodyparser, get the value of agree checkbox
  if (password1 == password2){
     if (agree_check.checked) {
       res.sendFile(__dirname + "/registered.html");
     }
     else{
      //  res.send("Check terms and conditions");
      register_message.textContent = "Check terms and conditions";
     }
  }
  else{
    // res.send("Password doesn't match");
    register_message.textContent = "Password doesn't match";
  }
});
