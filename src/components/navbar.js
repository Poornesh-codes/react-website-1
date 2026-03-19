import React, {useState} from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    const [click,setclick]= useState(false);
    const handleClick = () => setclick(!click);
    return (
    <>
    <nav className="Navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                My <i classname="fab fa-typo3" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
