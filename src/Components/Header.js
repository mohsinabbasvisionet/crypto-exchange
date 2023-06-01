import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../logo.svg";


function Header() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/" className="nav-link ">
                    <h1 className="navbar-brand">Crypto Exchange</h1>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link active">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">SignUp</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/myComponent" className="nav-link">My Component</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;
