import React from "react";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";


const aStyle = {
  color: "green"
}

const Header = () => (

  <header>
    <ul>
      <li><Link to="/" activeStyle={aStyle}>{config.siteTitle}</Link></li>
      <li><Link to="/about" activeStyle={aStyle}>About</Link></li>
    </ul>
  </header>

)

export default Header;
