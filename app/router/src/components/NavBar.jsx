import React from 'react'
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <nav style = {{fontFamily: "Open Sans, sans-serif", background: "#000000", fontsize: "50px"}}>
    <Link to = "/" style = {{margin: "10px", fontsize:"50px"}}>Home</Link>
    <Link to = "/about " style = {{margin: "10px"}}> About </Link>
    <Link to = "/contact" style = {{margin: "10px"}}> Contact </Link>

      
    </nav>
  )
}

export default NavBar
