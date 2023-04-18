// importing sub components
import Header from "./components/Header";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

// const react = require("react");
import React from "react";

function App(){
  return (
    <div>
      <Header />
      <Notes />
      <Notes />
      <Notes />
      <Notes />
      <Notes />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;