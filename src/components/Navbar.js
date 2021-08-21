import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
      <div className="navbar">
        <div className="nav-left">
          <h1>
            <Link to="/">MyServiceCube</Link>
          </h1>
        </div>
        <div className="nav-right">
          <div className="nav-item">
            <Link to="/signin">Login</Link>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default Navbar
