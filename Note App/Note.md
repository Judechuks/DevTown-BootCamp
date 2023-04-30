## MOTE FROM DEVTOWN BOOTCAMP
The coding platform used was **codesandbox** (website/software). 
You can access replit using mobile phones and it gives you the advantage of hosting/deploying your codes.
Repl is where you write and run the codes (nodejs). gives you access to shell, terminal, text editor, etc.

---

## LINK
**[CodeSandBox Account](https://codesandbox.io/u/judechuks)**

---

## REACTJS
ReactJs is a frontend library for javascript. Nodejs provides javascript the environment t run on.

**An important feature of React is component**
### Component:
Component is a unit of code (HTML, CSS, JS) or smaller websites that comprises of a larger or complete website. And each of the components interacts with the backend (that is a good feature that enables use to recieve notifications even without refresh the webpage).

#### Using CodeSandBox
On your codesandbox, click on create and click React.
You are going to see public folder and src folder.
In the public folder, you will see the index.js and style.css, move the style.css folder from the src folder to the public folder by clicking and dragging.
Open the index.js and clear the written codes.
You can delete the App.js (or you since we will be creating that later on).

---

## WORKING IN REACTJS
In the index.js file, type:

`const React = require("react"); // importing the react library
`const ReactDOM = require("react-dom"); // importing the reactDOM library

The reactDom library allows the components to interact with the backend. To use it, you use
ReactDOM.render("what to show", "where to show it");

`ReactDOM.render("Hellow World!", document.geElementById("root");
`ReactDOM.render("<h1>Hellow World!</h1>", document.geElementById("root");

The first is an exapmle of vanilla javascript (which is pure javascript).
The second is an exapmle of JSXML or JSX javascript (which is combining javascript and html).
The barbel translator/compiler translates the JSX into vanilla js.

---

### HOW TO CREATE A COMPONENT IN REACTJS
You can not render multiple tags at the same time using 'render' method, rather add those multiple tags into a container (<div>).

**EXAMPLE:**
`ReactDOM.render("
`  <div>
`    <h1>Hellow World!</h1>
`    <p>Welcome to our page!</p>
`  </div>, 
`document.geElementById("root");

#### CREATING A COMPONENT
A component itself is a function that have a return value.

**EXAMPLE:**
`function heading(){
`  return <h1>Hello World!</h1>;
`}

You can use arrow function and assign it to a varible.

`ReactDOM.render("
`  <div>
`    <heading/> // component(function) created above
`    <p>This is Hello World App in ReactJs</p>
`  </div>, 
`document.geElementById("root");

You can create a separate file for the function (as a module) and save as the name of the function (Heading.jsx).
Add the function into the above file, include the following statement at the top of the index.js:

`import Heading from "./Heading.jsx";

Add this statement at the end of the Heading.jsx at the end of the function definition:

`export default Heading;

if you want to make the paragraph a component then follow same step as done for heading 1

**NOTE:**
Your html file (index.html) is the main file that the browser can read, so the css and index.js files has to be linked to the index.html file. While every other components have to be linked (exported) to the index.js

**App.jsx**
The industry standard of using ReactJs is to create one main component called App.jsx which will be linked to the index.js and further components should be exported to the App.jsx

**NOTE:**
To add a class in an element don't use class="class-name" rather use the class-name property i.e className="class-name".

**EXAMPLE:** [In the notes component (notes.jsx)]

`function notes(){
`  return (
`    <div className="note"> // note is the class name which can be styled in css
`      <h1>My Heading</h1>
`      <p>My texts</p>
`    </div>
`  );
`}
`export default notes;

##### COMMENT
Comment in a .jsx code is denoted as {/*my comment*/}

**EXAMPLE:**
`<div className="note">
`{/*this is a comment*/}
`<p>My text</p>
`</div>

But outside the html related code, comments are written in the normal form as javascript comments

`function notes(){
`  return (
`    <div className="note"> 
`      //This is a comment
`      /*This is a comment*/
`      <p>My texts</p>
`    </div>
`  );
`}

##### VARIABLE
**Representing variables in .jsx file:** if the variable is written in the html related code (jsx) then varible should be surrounded with {}
**EXAMPLE:**
`function footer(){
`  const currentYear = new Date().getFullYear();
`  return (
`    <p>Copyright @ {currentYear}</p>
`  );
`}
`export default footer;

**NOTE:**
When creating a component, the function name has to be the name of the file.