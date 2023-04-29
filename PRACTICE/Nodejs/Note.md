## MOTE FROM DEVTOWN BOOTCAMP
The coding platform used was **replit** (website/software). 
You can access replit using mobile phones and it gives you the advantage of hosting/deploying your codes.
Repl (Read evaluation Print Loop) is where you write and run the codes (nodejs). gives you access to shell, terminal, text editor, etc.
When you are in the terminal, you can exit the terminal by pressing ctrl + c twice, or ctrl + D, or type exit and press enter on the keyboard.
Note taken from 20/4/2023

---

## LINK
**[Replit Account](https://replit.com/@Jude-Chukwuemek/)**

---

## NODEJS
Nodejs comes with different modules (more like an already made or customized functions) which makes work easy for developers. You don't have to code your projects from scratch, you can make use of these modules (functions) to achieve your results.

**EXAMPLES**
Examples are:
**1. fileSystem (fs):**
fileSystem allows one to perform file operations like copy.
**2. supervillians:**
villians generate random supervillian names.
**etc**

#### TO COPY A FILE'S CONTENT TO ANOTHER
in the **index.js** file type the following code:

`const fs = require('fs');
`fs.copyFileSync('text1.txt', text2.txt);

Where text1.txt is the source (file's content to be copied) and text2.txt is the destination.
Then run or execute the **index.js** file type in the terminal this command

`node index.js 

### NPM (Node Package Manager) **[npm](https://npmjs.com/)**
npm provides so many methods/functions that can be used to accomplish a task.
To use npm, you need to initialize it in the terminal (in the directory that you are using).

`npm init

Then answer the prompt questions like author, description, etc.
npm provides different packages as mentioned above: supervillians etc.
To use these packages, you have to install the packages through the terrminal (in the directory that you are using).

`npm install supervillians

#### Usage:

`const supervillians = require('supervillians');
`supervillians.all;
`let villian = supervillians.random();
`console.log(villian);

---

## EXPRESSJS (**[npm](https://expressjs.com/)**)
Expressjs is a package in npm. It is a nodejs framework. It sits on nodejs which allows interactiveness between the frontend and the backend.
You have to install expressjs by installing the npm package via the terminal and execute the following code:

`npm install express

This will install expressjs and then you can import expressjs in the index.js file

`const express = require('express');

create a variable that will stand in for express method so we won't have to call other functions or method using express.methodName()

**NOTE:** You can run your index.js on the terminal by typing `node index.js

To start writing codes
`const App = express();
`App.listen(8000);

means that the App which is expressjs should make use of the port number 800 of the computer.

`App.listen(8000, function(){
`  console.log("The server started on port 8000");
`});

Means it should call the anonymous function when the server has successfully started at port 8000
But the server can not execute a get request. Then write a code for the get function once a get request is made.

`App.get("/", function(req, res){
`  res.send("Hello World!");
`});

To avoid always restarting the server for the new code written to be executed, we use "nodemon" (npm package) which we have to install the terminal by running the following code:

`npm install -g nodemon

-g means global installation for the local computer and all folder (c://)
Then run index.js using the nodemon instead of node in the terminal

`nodemon index.js

The nodemon is like the 'live server' extention in VS Code

Still in the index.js file

`App.get("/about", function(req, res){
`  res.send("Welcome, This is the about section");
`});

**NOTE:** instead of sending a message, you can send a file (index.html) in your index.js file by:

`App.get("/", function(req, res){
`  res.sendFile(__dirname + "/index.html");
`});

The __dirname sends the computer's directory and concatenates it with the /filename.extention, which will then give you the correct path to the file and the file to send as the resonse.

---

### POST REQUEST AND GET REQUEST
When you are trying to open a page, it is a get request. (e.g google.com).
When you are sending data to the server, it is known as post request.
When you try to post a request without writing the post request code, it will generate error "Cannot POST /" similarly when you try to get "Cannot GET /" 

#### Http Status Code
1xx (101, 102, 103, 104, etc) means hold on, page is loading.
2xx (201, 202, 203, 204, etc) means ready, here you go.
3xx (301, 302, 303, 304, etc) means go away, you are not allowed.
4xx (401, 402, 403, 404, etc) means mistake from you. (request doesn't exist).
5xx (501, 502, 503, 504, etc) means mistake from the backend.

**Post Method and Request** (After the get request)
`App.post("/", function(req, res){
`  res.send("Submitted Successfully!");
`});

#### BodyParser
Go to the npm and install body parser via the terminal

`npm install body parser

In index.js file, type:

`const bodyParser = require('body-parser');
`App.use(bodyParser.urlencoded({extended:true}));

Which will encode the request, and we can now access the request through bodyParser() method.
The previous post request now rewritten as:

`App.post("/", function(req, res){
`  var num1 = Number(req.body.n1); // from body parser
`  var num2 = Number(req.body.n2); // from body parser
`  var result = num1 + num2;
`  res.send("The result of your calculation is "+ result);
`});

**NOTE:**
n1 and n2 is a value of the name attribute in input field of the index.html file. which will contain a value when the user submits the form