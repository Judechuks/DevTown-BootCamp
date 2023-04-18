// const react = require("react");
import React from "react";

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright @ {currentYear}</p>
    </footer>
  );
}

export default Footer;