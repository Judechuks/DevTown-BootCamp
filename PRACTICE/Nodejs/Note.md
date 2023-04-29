## MOTE FROM DEVTOWN BOOTCAMP
The coding platform used was **replit**

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