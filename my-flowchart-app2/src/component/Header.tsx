import React from "react";
import { Link } from "react-router-dom";
import '../style/Header.css'

const Header: React.FC = () => {
  return (
    <header id="header">
      <div id="title-box">
        <div id="title">
          <h1>Flow Chart App</h1>
        </div>
      </div>
      <div id="menu-box">
        <div id="menu">
          <span className="menu"><Link to={`/`}>Title</Link></span>
          <span className="menu"><Link to={`/createFlowChart`}>Create</Link></span>
        </div>
      </div>
    </header>
  )
}

export default Header;