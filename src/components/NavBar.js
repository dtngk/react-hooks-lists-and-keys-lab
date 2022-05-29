import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{/* display an <a> tag for each link here */
        links.map(ele => <a href={'#' + ele} key={ele}>{ele}</a>)
        }</nav>;
}

export default NavBar;
