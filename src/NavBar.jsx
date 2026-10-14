import { useState } from "react";
import { Link } from "react-router-dom"
import logo from "./assets/logo.png"
import light from "./assets/light-icon.png"
import Button from "./Button.jsx";
import './NavBar.css'
import './Button.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
      <nav className="nav-bar">
        <div className="nav-logo">
           <img src={logo} alt="logo icon" className="nav-logo" />
        </div>
        <div className="nav-links">
                <ul>
                    <li><Link to="/#Home">Home</Link></li>
                     <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/#Process">Process</Link></li>
                     <li><Link to="/About">About</Link></li>
                     <li><Link to="/#Contact">Contact</Link></li>
                </ul>
        </div>
        <div className="nav-btn-container">
           <Button variant="primary" type="button">
            Book a Call
           </Button>
           <Button variant="tertiary" type="button">
            <img src={light} alt="light icon" className="light-icon" />
           </Button>
        </div>
    </nav>
  )
}

export default NavBar